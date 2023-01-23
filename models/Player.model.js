module.exports = (sequelize,Sequelize) => {
    const Player = sequelize.define("player", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName:{
            type: Sequelize.STRING
        }
    })

    return Player
}