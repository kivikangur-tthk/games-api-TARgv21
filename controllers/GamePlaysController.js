const { db } = require("../db")
const { getBaseUrl } = require("./helpers")
const GamePlays = db.gamePlays
const QueryTypes = db.Sequelize.QueryTypes

exports.getAll = async (req,res)=>{
    const sql = `SELECT g.name as GameName,
                        SUM(gp.PlayTimeMinutes) as MinutesPlayed,
                        CONCAT(p.firstName,' ',p.lastName) as PlayerName
                 FROM GamePlays AS gp 
                 INNER JOIN Games AS g on g.id = gp.GameId 
                 INNER JOIN Players AS p on p.id = gp.PlayerId 
                 GROUP BY gp.GameId, gp.PlayerId;`
    const sqlResult = await db.sequelize.query(sql,{type: QueryTypes.SELECT })
    if (sqlResult.length === 0) {
        res.send({"error":"No gameplays stored."})
        return
    }
    res.send(sqlResult)
}