const { db } = require("../db")
const Game = db.games

exports.getAll = async (req,res)=>{
    const games = await Game.findAll()
    res.send(JSON.stringify(games))
}