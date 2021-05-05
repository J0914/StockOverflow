const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils')

router.get('/', asyncHandler(async(req,res) => {
    const questions = await db.Question.findAll({
        include: 'User'
        // need to include QuestionVote so we can 
        // order by number of votes on this page.
    })

    res.render('questions', {
        title: 'Questions',
        questions
    })
}))

module.exports = router