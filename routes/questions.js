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
            model: db.QuestionVote,
            as: 'QuestionVotes'
        }, {
            model: db.Response,
            as: 'Responses'
        }]
    });

    res.render('questions', {
        title: 'Questions',
        questions
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
    console.log(req.body)

    const validatorErrors = validationResult(req);
}))

module.exports = router