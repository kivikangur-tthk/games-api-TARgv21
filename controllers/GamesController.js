const { db } = require("../db")
const { getBaseUrl } = require("./helpers")
const Game = db.games

exports.getAll = async (req,res)=>{
    const games = await Game.findAll({attributes:["id", "name"]})
    res.send(JSON.stringify(games))
}
exports.createNew = async (req,res)=>{ 
    let game
    try {
        game = await Game.create(req.body,
            {
                logging: console.log,
                fields: ["name","description","genre","studio","release"]
            })
    } catch (error) {
        if (error instanceof db.Sequelize.ValidationError) {
            res.status(400).send({"error":error.errors.map((item)=> item.message)})  
        } else {
            console.log("GamesCreate:",error)
            res.status(500).send({"error":"Something went wrong on our side. Sorry :("})
        }
        return
    }
    res.status(201)
        .location(`${getBaseUrl(req)}/games/${game.id}`)
        .json(game)
}
exports.getById = async (req,res)=>{
    const game = await Game.findByPk(req.params.id, {logging: console.log})
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