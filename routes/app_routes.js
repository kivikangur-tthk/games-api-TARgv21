const gamesController = require("../controllers/GamesController.js")
const playersController = require("../controllers/PlayersController.js")
const gamePlaysController = require("../controllers/GamePlaysController.js")

module.exports = (app) => {
    app.route("/games")
        .get(gamesController.getAll)
        .post(gamesController.createNew)    //Create
    app.route("/games/:id")
        .get(gamesController.getById)       //Read
        .put(gamesController.updateById)    //Update
        .delete(gamesController.deleteById) //Delete

    app.route("/players")
        .get(playersController.getAll)
        .post(playersController.createNew)    //Create
    app.route("/players/:id")
        .get(playersController.getById)       //Read
        .put(playersController.updateById)    //Update
        .delete(playersController.deleteById) //Delete
    
    app.route("/gameplays")
        .get(gamePlaysController.getAll)
}
