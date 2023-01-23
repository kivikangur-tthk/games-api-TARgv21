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
    res.send({"message":"Not ipmlemented yet"})
}
exports.updateById = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}
exports.deleteById = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}