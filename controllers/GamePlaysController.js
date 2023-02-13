const { db } = require("../db")
const { getBaseUrl } = require("./helpers")
const GamePlays = db.gamePlays
const Game = db.games
const Player = db.players
const QueryTypes = db.Sequelize.QueryTypes

exports.getAll = async (req, res) => {
  const sql = `SELECT g.name as GameName,
                        SUM(gp.PlayTimeMinutes) as MinutesPlayed,
                        CONCAT(p.firstName,' ',p.lastName) as PlayerName
                 FROM GamePlays AS gp 
                 INNER JOIN Games AS g on g.id = gp.GameId 
                 INNER JOIN Players AS p on p.id = gp.PlayerId 
                 GROUP BY gp.GameId, gp.PlayerId;`
  const sqlResult = await db.sequelize.query(sql, { type: QueryTypes.SELECT })
  if (sqlResult.length === 0) {
    res.send({ error: "No gameplays stored." })
    return
  }
  res.send(sqlResult)
}

exports.createNew = async (req, res) => {
    console.log("New GamePlay: ",req.body)
    let gamePlay
    try {
        gamePlay = await GamePlays.create(req.body,
            {
                logging: console.log,
                include: [ Game, Player ]
            })
    } catch (error) {
        if (error instanceof db.Sequelize.ValidationError) {
            res.status(400).send({"error":error.errors.map((item)=> item.message)})  
        } else if (error instanceof db.Sequelize.ForeignKeyConstraintError){
            res.status(400).send({"error":`Table:${error.table} does not contain row with id:${error.value}`})
        } else {
            console.log("GamePlaysCreate:",error)
            res.status(500).send({"error":"Something went wrong on our side. Sorry :("})
        }
        return
    }
    res.status(201)
        .location(`${getBaseUrl(req)}/gameplays/${gamePlay.id}`)
        .json(gamePlay)

}
