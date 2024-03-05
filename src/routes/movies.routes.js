const { Router } = require("express")
const MoviesController = require("../controllers/moviesController")

const moviesController = new MoviesController()


const moviesRoutes = Router()

moviesRoutes.post("/:user_id", moviesController.create)
moviesRoutes.delete('/:id', moviesController.delete)

module.exports = moviesRoutes