module.exports = (sequelize,Sequelize) => {
    const Game = sequelize.define("game", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
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
