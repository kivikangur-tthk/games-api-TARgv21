const { db } = require("../db")
const Game = db.games

exports.getAll = async (req,res)=>{
    const games = await Game.findAll({attributes:["id","name"]})
    res.send(JSON.stringify(games))
}
exports.createNew = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}
exports.getById = async (req,res)=>{
    const game = await Game.findByPk(req.params.id)
    if (game === null){
        res.status(404).send({"error":"Game not found"})
    } else {
        res.send(game)
    }
}
exports.updateById = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}
exports.deleteById = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}