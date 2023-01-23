const { db } = require("../db")
const Players = db.players

exports.getAll = async (req,res)=>{
    const players = await Players.findAll({attributes:["id","firstName"]})
    if (players.length == 0){
        res.send({"message":"No players exist"})
    } else {
        res.send(JSON.stringify(players))
    }    
}