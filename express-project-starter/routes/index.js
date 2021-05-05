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
      as: 'QuestionVotes',
  }, {
      model: db.Response, 
      as: 'Responses'
  }] 
  })
  console.log(questions[0].QuestionVotes[0].score)

  let score;

  res.render('index', { 
    title: 'Top Questions', 
    questions,
    score
  });
}));

module.exports = router;
