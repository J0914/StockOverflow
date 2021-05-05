const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils')

router.get('/', asyncHandler(async(req,res) => {
    const questions = await db.Question.findAll({
        include: [{ 
            model: db.User, 
            as: 'user' 
        }, { 
            model: db.QuestionVote, 
            as: 'questionVote' 
        }, {
            model: db.Response, 
            as: 'response'
        }] 
    });

    res.render('questions', {
        title: 'Questions',
        questions
    })
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = db.Question.findByPk(questionId);

    res.render('question-id', {
        title: question.title,
        question,
        
    })
}))

module.exports = router