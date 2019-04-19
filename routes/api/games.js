const express = require('express');
const router = express.Router();

//Game Model
const Game = require('../../models/Game');

// @route   GET api/games
// @desc    Get All games
// @access  Public
// '/' = '/api/games'
router.get('/', (req,res) =>{
    Game.find()
        .sort({ date: -1 })
        .then(games => res.json(games))
});

router.get('/:id',(req,res) =>{
    Game.findById(req.params.id)
    .then(games => res.json(games))
    .catch(err => res.status(404).json({success: false}));
});


// @route   POST api/games
// @desc    Create an Game
// @access  Public
router.post('/', (req,res) =>{
    const newGame = new Game({
        teamA: req.body.teamA,
        teamB: req.body.teamB,
        date: req.body.date
    });

    newGame.save().then(game => res.json(game));
    
});

// @route   DELETE api/games/:id
// @desc    Delete a Game
// @access  Public
router.delete('/:id', (req,res) =>{
    Item.findById(req.params.id)
        .then(game => game.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});




module.exports =  router;