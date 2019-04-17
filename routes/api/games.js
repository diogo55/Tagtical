const express = require('express');
const router = express.Router();

//Item Model
const Game = require('../../models/Game');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
// '/' = '/api/items'
router.get('/', (req,res) =>{
    Game.find()
        .sort({ date: -1 })
        .then(games => res.json(games))
});


// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req,res) =>{
    const newGame = new Game({
        teamA: req.body.teamA,
        teamB: req.body.teamB
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