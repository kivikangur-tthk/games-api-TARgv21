module.exports = (sequelize,Sequelize,Game,Player) => {
        const GamePlay = sequelize.define("GamePlay", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        GameId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: Game,
                key: "id"
            }
        },
        PlayerId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: Player,
                key: "id"
            }
        },
        PlayTimeMinutes: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 1
        }
    })
    Game.belongsToMany(Player, { through: GamePlay})
    Player.belongsToMany(Game, { through: GamePlay})
    Game.hasMany(GamePlay)
    GamePlay.belongsTo(Game)
    Player.hasMany(GamePlay)
    GamePlay.belongsTo(Player)
    return GamePlay
}