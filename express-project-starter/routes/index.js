const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils')

/* GET home page. */
router.get('/', asyncHandler(async(req, res, next) => {
  let questions = await db.Question.findAll({
    include: 'User',
    order: [['createdAt', 'DESC']]
  })

  res.render('index', { 
    title: 'Welcome to Stock Overflow', 
    questions 
  });
}));

module.exports = router;
