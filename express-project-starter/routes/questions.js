const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils')

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

module.exports = router

