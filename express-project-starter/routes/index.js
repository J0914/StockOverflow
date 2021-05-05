const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler(async(req, res, next) => {
  let questions = await db.Question.findAll({
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
  })
  console.log(questions.toJson())

  let score;

  if (questions.QuestionVotes.score) {
    score = questions.QuestionVotes.score;
  } else {
    score = 0;
  }

  res.render('index', { 
    title: 'Welcome to Stock Overflow', 
    questions,
    score
  });
}));

module.exports = router;
