const { Router } = require("express")
const TagsController = require("../controllers/tagsController")
const tagsRoutes = Router()

const tagsController = new TagsController()


tagsRoutes.post("/:user_id/:movie_id", tagsController.create)

module.exports = tagsRoutes