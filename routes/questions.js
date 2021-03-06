const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils')
const { check, validationResult } = require('express-validator');


router.get('/', asyncHandler(async (req, res) => {
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
        }, {
            model: db.Tag,
            as: 'Tags'
        }]
    });


    questions.forEach(question => {
        question['test'] = "test";
    })

    console.log("test", questions[0].Tags[0].name);

    const findScore = (question) => {
        const allVotes = question.QuestionVotes;
        const totalScore = allVotes.reduce((accum, vote) => {
            const score = vote.score;
            accum += score;
            return accum
        }, 0)
        return totalScore
    }

    questions.forEach(question => {
        let score = findScore(question);
        question['totalScore'] = score;
    })

    res.render('questions', {
        title: 'All Questions',
        questions,
        findScore
    })
}))

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => { //does this need a csrfToken for the new response form...?
    let userId;
    if (req.session.auth) {
        userId = req.session.auth.userId
    }
    
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId, { include: 'User' });
    const allResponses = await db.Response.findAll({
        include: {model: db.User},
        where: {
            questionId: questionId
        },
        include: [
            {model: db.User}, 
            {model: db.ResponseVote}
        ]
    });
    const newResponse = await db.Response.build();
    const questionVotes = await db.QuestionVote.findAll({ where: { questionId: question.id } });
    
    //allResponses has an array of all the responses for this question;
    //  Each response includes all the votes for it

    allResponses.forEach(response => {
        let voteTally = 0;
        let userResVoted = false;
        let userResVoteScore = 0
        response.dataValues.ResponseVotes.forEach(vote => {
            voteTally += vote.dataValues.score;

            if (userId && vote.dataValues.userId === userId) {
                userVoted = true;
                userResVoteScore = vote.dataValues.score;
            }
        })

        response.dataValues.resTotalScore = voteTally;
        response.dataValues.userVoteInfo = {userResVoted, userResVoteScore}
    })


    // console.log("Check the ResponseVotes..............==>", allResponses[0].dataValues.ResponseVotes)

    
    
    let userScore = 0;

    // console.log("User Score ==========>", userScore, "<==============")
    if (userId) {
        questionVotes.forEach(vote => {
            if (vote.userId === userId) {
                userScore = vote.score;
            }
        })
    }


    let totalScore = 0;
    if (questionVotes.length > 0) {
        questionVotes.forEach(vote => {
            totalScore += vote.dataValues.score
        })
    }

    // console.log("totalScore ~~~~~~~~~~~~~~~~~~~~~~>", totalScore, "<~~~~~~~~~~~~~~~~~~~~~~")

    res.render('question-thread', { csrfToken: req.csrfToken(), allResponses, question, questionId, totalScore, response: newResponse, userScore })
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

    res.render('question-ask', { csrfToken: req.csrfToken(), question, title: 'Ask A New Question' })
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
        if (!userId) {
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

    if (tags) {
        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i];

            const dbTag = db.Tag.findOne({
                where: {
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
}));


router.post('/:id(\\d+)/vote', asyncHandler(async (req, res, next) => {
    

    const questionId = Number(req.params.id);
    
    const responseId = req.body.responseId;
    
    let allScores = await db.QuestionVote.findAll({ where: { questionId } });
    let totalScore = 0;
    for (let i = 0; i < allScores.length; i++) {
        let current = allScores[i];
        totalScore += current.dataValues.score;
    }
    
    let voteScore = req.body.score;
    const userId = req.session.auth.userId;
    //this can probably get optimized
    const questionVotes = await db.QuestionVote.findAll({ where: { userId } });

    if (userId) {
        let hasVoted = false;
        //check if has voted
        if (questionVotes.length > 0) {
            questionVotes.forEach(vote => {
                if (vote.dataValues.questionId === questionId) {
                    hasVoted = true;
                    //!!notify user that they can not vote more than once
                }
            });
        }
        if (hasVoted === false) {
            totalScore += voteScore;
            await db.QuestionVote.create({ userId, questionId, score: voteScore });
            console.log('vote score', voteScore)
        } else {
            totalScore -= voteScore;
            let currentVote = await db.QuestionVote.findOne({
                where: { userId, questionId }
            })
            await currentVote.destroy();
        }
    } else {
        console.error('Please log in!')
    }
        //console.log(totalScore);
        await res.json({ totalScore });
    }
));


router.post('/:id(\\d+)/responses/:responseId(\\d+)/vote', asyncHandler(async (req, res, next) => {

    const responseId = parseInt(req.params.responseId, 10);
    const userId = req.session.auth.userId;

    const {scoreRes, userVoted} = req.body;

    

    console.log(responseId, scoreRes, userVoted)

    
    if (userVoted === true) {
        //delete vote
        let currentVote = await db.ResponseVote.findOne({
            where: { userId, responseId }
        }) 

        await currentVote.destroy();
        
    } else {
        //create vote
        await db.ResponseVote.create({ userId, responseId, score: scoreRes })
    }
    
    
    const responseVotesForThisResponse = await db.ResponseVote.findAll({ where: {responseId}})

    let totalScoreOfResponse = 0;

    responseVotesForThisResponse.forEach(vote => {
        totalScoreOfResponse += vote.dataValues.score;
    })

    await res.json({ totalResScore: totalScoreOfResponse });
}))


router.post('/:id(\\d+)/response/submit', csrfProtection, asyncHandler(async (req, res) => {
    
    const { responseText } = req.body;

    const questionId = req.params.id;

    if(req.session.auth) {
        const userId = req.session.auth.userId;



        // console.log('QuestionID', questionId)
        await db.Response.create({ responseText, userId, questionId });

        res.redirect(`/questions/${questionId}`);
    } else {
        errors = ["You must be logged in to submit a response"]

        const response = db.Response.build({responseText, questionId})
        res.redirect(`/questions/${questionId}`, {csrfToken: req.csrfToken(), errors, response})
    }


}));


module.exports = router;
