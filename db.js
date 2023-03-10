require("dotenv").config()

const Sequelize = require("sequelize")
const sequelize = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mariadb",
    define: {
      timestamps: false,
    },
    logging: false
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.games = require("./models/Game.model")(sequelize, Sequelize)
db.players = require("./models/Player.model")(sequelize, Sequelize)
db.gamePlays = require("./models/GamePlay.model")(sequelize, Sequelize, db.games,db.players)

async function Sync() {
  //await sequelize.sync({force:true}) // Erase all and recreate
  await sequelize.sync({ alter: true }) // Alter existing tables to match the model
}

module.exports = { db, Sync }
