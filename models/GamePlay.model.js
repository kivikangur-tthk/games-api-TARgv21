module.exports = (sequelize,Sequelize,Game,Player) => {
        const GamePlay = sequelize.define("GamePlay", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        GameId: {
            type: Sequelize.INTEGER,
            references:{
                model: Game,
                key: "id"
            }
        },
        PlayerId: {
            type: Sequelize.INTEGER,
            references:{
                model: Player,
                key: "id"
            }
        }
    })
    Game.belongsToMany(Player, { through: GamePlay})
    Player.belongsToMany(Game, { through: GamePlay})
    return GamePlay
}