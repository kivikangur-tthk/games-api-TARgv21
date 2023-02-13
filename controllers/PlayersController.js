const { db } = require("../db")
const Players = db.players
const Games = db.games
const GamePlays = db.gamePlays

exports.getAll = async (req,res)=>{
    const players = await Players.findAll({attributes:["id","firstName"]})
    if (players.length == 0){
        res.send({"message":"No players exist"})
  } else {
    res.send(JSON.stringify(players))
  }
}
exports.createNew = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}
exports.getById = async (req, res) => {
  const player = await Players.findByPk(req.params.id, {
    logging: console.log,
    include: {
      model: GamePlays,
      attributes: ["id","PlayTimeMinutes"],
      include: {
        model: Games,
        attributes: ["id","name"]
      }
    },
    order: [[GamePlays,"GameId","DESC"]]
  })
  if (player === null) {
    res.status(404).send({ error: "Player not found" })
  } else {
    res.send(player)
  }
}
exports.updateById = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}
exports.deleteById = async (req,res)=>{    
    res.send({"message":"Not ipmlemented yet"})
}