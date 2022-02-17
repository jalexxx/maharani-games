const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Highscore = require('../models/Highscore');

router.get('/', verifyToken, async (req, res) => {
    try {
        const highscores = await Highscore.all
        res.json(highscores)
    } catch (err) {
        res.status(500).send({ err })
    }
})

module.exports = router
