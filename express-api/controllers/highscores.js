const express = require('express');
const router = express.Router();

//const { verifyToken } = require('../middleware/auth');

const Highscore = require('../models/highscore');

router.get('/', async (req, res) => {
    try {
        const highscores = await Highscore.all
        res.json(highscores)
    } catch (err) {
        res.status(500).send({ err })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const highscore = await Highscore.findById(req.params.id);
        res.status(200).json(highscore)
    } catch (err) {
        res.status(404).json({err})
    }
})


// Create highscore route
router.post('/', async (req, res) => {
    try {
        const highscore = await Highscore.create( req.body.game, req.body.score, req.body.username)
        res.json(highscore)
    } catch(err) {
        res.status(404).json({err})
    }
})


module.exports = router
