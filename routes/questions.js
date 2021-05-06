const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils')
const { check, validationResult } = require('express-validator');

router.get('/', asyncHandler(async(req,res) => {
    const questions = await db.Question.findAll({

        include: [{
            model: db.User,
            as: 'User'
        }, {
            model: db.QuestionVote,
            as: 'QuestionVotes'
        }, {
            model: db.Response,
            as: 'Responses'
        }],
    });

    const findScore = (question) => {
        const allVotes = question.QuestionVotes;
        const totalScore = allVotes.reduce((accum, vote) => {
          const score = vote.score;
          accum += score;
          return accum
        }, 0)
        return totalScore
    }

    questions.map(question => {
        let score = findScore(question);
        question['totalScore'] = score;
    })

    res.render('questions', {
        title: 'All Questions',
        questions,
        findScore
    })
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => { //does this need a csrfToken for the new response form...?
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId, {include: 'User'});
    const responses = await db.Response.findAll({
        where: {
            questionId: questionId
        },
    })


    res.render('question-thread', { responses, question })
}))

const questionValidators = [
    check('questionTitle')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for your question title')
      .isLength({ max: 100 })
      .withMessage('Question title must be less than 100 characters long'),
    check('questionText')
      .exists({ checkFalsy: true })
      .withMessage('Please include information for your question body')
];


router.get('/ask', csrfProtection, (req, res) => {
    const question = db.Question.build()

    res.render('question-ask', { csrfToken: req.csrfToken(), question, title: 'Ask A New Question'})
})


router.post('/ask', csrfProtection, questionValidators, asyncHandler(async (req, res, next) => {

    let userId;
    if (req.session.auth) {
        userId = req.session.auth.userId;
    } else {
        userId = 0;
    }


    const { questionTitle, questionText, tags } = req.body;

    const question = db.Question.build({
        questionTitle,
        questionText,
    })

    let newQuestion;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        if(!userId) {
            const errors = ['You must be logged in to post'];
            res.render('question-ask', { title: 'Ask A New Question', question, errors, csrfToken: req.csrfToken() })
            return;
        } else {
            question.authorId = userId;
            newQuestion = await question.save();
        }
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('question-ask', { title: 'Ask A New Question', question, errors, csrfToken: req.csrfToken() })
    }

    if(tags) {
        for(let i = 0; i < tags.length; i++) {
            let tag = tags[i];

            const dbTag = db.Tag.findOne({where: {
                    name: tag
                }
            });
            db.QuestionTag.build({
                questionId: newQuestion.id,
                tagId: dbTag.id
            })
        }
    }

    res.redirect(`/questions/${newQuestion.id}`)
}))

module.exports = router
