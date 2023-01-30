module.exports = (sequelize,Sequelize) => {
    const Game = sequelize.define("Game", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description:{
            type: Sequelize.STRING(4096)
        },
        genre:{
            type: Sequelize.STRING,
            allowNull: false
        },
        studio: {
            type: Sequelize.STRING
        },
        release: {
            type: Sequelize.DATEONLY
        }
    })
    return Game
}
