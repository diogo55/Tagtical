const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//schema das estatisticas de um jogo
const DataSchema = new Schema ({
    dist: Number,
    vel_media: Number,
    vel_max: Number
});

//schema da posição
const PositionSchema = new Schema({
    posX: Number,
    posY: Number,
    time: String,
    /*  gyro: {
        a: Number,
        b: Number,
        c: Number
    }*/
});

//schema de um jogador
const PlayerSchema = new Schema ({
    name: String,
    data: DataSchema,
    pos: [PositionSchema]
    
});

const TeamSchema = new Schema ({
    name: String,
    players: [PlayerSchema]
});    

const GameSchema = new Schema ({
    teamA: TeamSchema,
    teamB: TeamSchema,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Game = mongoose.model('game',GameSchema,'games');