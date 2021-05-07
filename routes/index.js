const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils')
const { Op } = require("sequelize");

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



router.get('/search', asyncHandler(async (req, res) => {

  // console.log("LOOK HERE~~~!", req.query)

  const wordList = "is i i'll we'd we'll i'd we've i've we've does doesn't did am was were been isn't aren't weren't won't hasn't can't couldn't wouldn't i'm there's he's she's it's its haven't shouldn't be the and to a of you it in have that we they not do he this for on but know go so with say get think I there will at as what about she like just one if or well all from people would can out because up when who now some right see very come thing more make time want by no really then year good mean take here other which look work could way how talk lot where back much yes use into something over give pause call any than day kind first unclear tell down need also try put only actually should last even let find little sort why new today many still after thank through start point question most happen off feel big before too week problem hear part ask long issue yeah different change again same another great might number man show never around bit next place money end play interest help life may fact keep live home state sure world leave always write course report every probably woman own meet case move run anything pay job seem bring old both believe late maybe quite read house kid whether high family speak between bad important few group away turn though understand okay able ago become area name idea term remember whole begin against hard early love side plan far enough word set ever real close guy since hope student else pretty person while second reason everything under spend lose open young public stuff each together care sit certainly support such win nice news percent hold hand friend send already watch once morning somebody stop sense couple join city small stay nothing concern continue exactly yet guess someone community head past break until must top matter information record expect without level force lead learn include whatever answer process large party stand cause clear agree listen mind almost moment policy during everybody situation wait game grow walk less experience true cut sound across decide either face order service involve parent sometimes allow obviously decision absolutely view along study suppose pick basically sell wrong rather within perhaps fall"

  const wordListArray = wordList.split(" ");
  const endingPunc = '.!?,;:';

  let inputText = req.query.q;

  let inputTextArray = inputText.toLowerCase().split(" ")

  let processedTextArray1 = inputTextArray.map(word => {

    let processedWord = word;
    while(endingPunc.includes(processedWord[processedWord.length - 1])) {
      processedWord = processedWord.slice(0, processedWord.length - 1)
    }
    return processedWord;
  })

  let processedTextArray2 = processedTextArray1.filter(word => !wordListArray.includes(word));

  let queryObject = {};
  queryObject.where = {};
  queryObject.where[Op.or] = [];
  queryObject.order = [['createdAt', 'DESC']];
  queryObject.include = [{model: db.Tag}, {model: db.User}]
  queryObject.limit = 15;


  processedTextArray2.forEach(word => {
    queryObject.where[Op.or].push({questionTitle: {[Op.iLike]: `%${word}%`}})
    queryObject.where[Op.or].push({questionText: {[Op.iLike]: `%${word}%`}})
  })

  const allQuestions = await db.Question.findAll(queryObject);


  // console.log("ALL QUESTIONS", allQuestions[0])

  res.render('search', { title: 'Search Results', inputText: inputText.toLowerCase(), questions: allQuestions})
}));




module.exports = router;
