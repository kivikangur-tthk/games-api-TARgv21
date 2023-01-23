require("dotenv").config()

const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DB_BASE,process.env.DB_USER,process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mariadb",
    define: {
        timestamps: false
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.games = require("./models/Game")(sequelize,Sequelize)

//await sequelize.sync({force:true}) // Erase all and recreate
async () => await sequelize.sync({alter:true}) // Alter existing tables to match the model

module.exports = db