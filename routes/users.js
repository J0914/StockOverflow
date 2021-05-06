const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {
  const user = db.User.build();

  res.render('users-signup', {
    title: 'Sign-Up',
    user,
    csrfToken: req.csrfToken(),
  });
}));

const userValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .custom((value => {
      return db.User.findOne({
        where: {
          email: value
        }
      })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account.')
          }
        });
    })),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Please make sure passwords match'),
];

const passwordValidators = [
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Please make sure passwords match'),
  ];

router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res, next) => {
  const { userName, email, password } = req.body

  const user = db.User.build({
    userName,
    email,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('users-signup', {
      title: 'Sign-Up',
      user,
      errors,
      csrfToken: req.csrfToken()
    });
  }
}));

const loginValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
]

router.get('/login', csrfProtection, asyncHandler(async(req, res) => {
  res.render('users-login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  });
}));


router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  let errors = [];
  let user;
  const validatorErrors = validationResult(req);

  if (await validatorErrors.isEmpty()) {
    if(await db.User.findOne({ where: { userName } })) {
      user = await db.User.findOne({ where: { userName } })
    } else if (await db.User.findOne({ where: { email: userName } })) {
      user = await db.User.findOne({ where: { email: userName } })
    }
    // if a user decides to login with their email, the userName variable can be represented by either a userName or email
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString()) //why toString?
      if (passwordMatch) {
        loginUser(req, res, user);
        return res.redirect('/');
      }
    }
    errors.push("Login failed given the provided credentials. Please try again.")
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }
  res.render('users-login', {
    title: 'Login',
    userName,
    errors,
    csrfToken: req.csrfToken()
  });
}));

router.post('/loginDemo', asyncHandler(async (req, res) => {
  const user = await db.User.findOne({ where: { id: 1 } })
  loginUser(req, res, user);
  res.end();
}))

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
})

router.get('/settings', csrfProtection, (req, res) => { 

  res.render('users-settings', {
    title: 'Settings',
    csrfToken: req.csrfToken()
  });
});

router.post('/settings', csrfProtection, passwordValidators, asyncHandler(async (req, res) => {
  const { oldPassword, password} = req.body;
  const user = await db.User.findByPk(req.session.auth.userId)
  if (user) {
    const passwordMatch = await bcrypt.compare(oldPassword, user.hashedPassword.toString()) //why toString?
    if (passwordMatch) {
      const validatorErrors = validationResult(req);
      if (validatorErrors.isEmpty()) {
        const hashedNewPassword = await bcrypt.hash(password, 10);
        user.hashedPassword = hashedNewPassword;
        await user.save();
        res.redirect('/');
      } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('users-settings', {
          title: 'Settings',
          user,
          errors,
          csrfToken: req.csrfToken()
        });
      }
    } else {
      const errors = ['Your old password is incorrect! Please Try Again!']
        res.render('users-settings', {
          title: 'Settings',
          user,
          errors,
          csrfToken: req.csrfToken()
        });
    }
  }
}));

router.post('/settings/delete', csrfProtection, asyncHandler(async(req, res) => {
  const userId = req.session.auth.userId
  if (userId !== 1) {
    const user = await db.User.findByPk(userId);
    const questions = await db.Question.findAll({ 
      where: { authorId: userId },
    })
    const responses = await db.Response.findAll({ 
      where: { userId: userId },
    })
    const questionVotes = await db.QuestionVote.findAll({ 
      where: { userId: userId },
    })
    const responseVotes = await db.ResponseVote.findAll({ 
      where: { userId: userId },
    })

      logoutUser(req, res)
      if (responseVotes.length > 0) {
        responseVotes.forEach(async(rVote) => {
          await rVote.destroy();
        })
      }
      if (responses.length > 0) {
        responses.forEach(async(response) => {
          await response.destroy();
        })
      }
      if (questionVotes.length > 0) {
        questionVotes.forEach(async(qVote) => {
          await qVote.destroy();
        })
      }
      if (questions.length > 0) {
        questions.forEach(async(question) => {
          await question.destroy();
        })
      }
      await user.destroy();
      res.redirect('/');
  } else {
    const errors = ['Sorry, you cannot delete the Demo User!']
    res.render('users-settings', {
      title: 'Settings',
      errors,
      csrfToken: req.csrfToken()
    });
  }
}));

module.exports = router;
