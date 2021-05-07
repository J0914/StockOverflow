const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils');

router.get('/', asyncHandler(async(req, res) => {
    const tags = await db.Tag.findAll();

    res.render('tags', {
        title: 'All Tags',
        tags,
    })
}))

module.exports = router;