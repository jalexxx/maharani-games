const express = require('express');
const router = express.Router();

//const { verifyToken } = require('../middleware/auth');

const Highscore = require('../models/Highscore');

router.get('/', async (req, res) => {
    try {
        const highscores = await Highscore.all
        res.json(highscores)
    } catch (err) {
        res.status(500).send({ err })
    }
})


// Create highscore route
router.post('/', async (req, res) => {
    try {
        const highscore = await Highscore.create(req.body.score, req.body.game, req.body.username)
        res.json(highscore)
    } catch(err) {
        res.status(404).json({err})
    }
})


module.exports = router
