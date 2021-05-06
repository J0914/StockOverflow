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

  res.render('index', { 
    title: 'Top Questions', 
    questions,
    findScore
  });
}));

module.exports = router;
