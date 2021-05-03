const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../db/models');

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
          emailAddress: value
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

router.post('/signup', csrfProtection, userValidators, asyncHandler(async(req, res, next) => {
  const {userName, email, password} = req.body

  const user = db.User.build({
    userName,
    email,
  });

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
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

module.exports = router;
