const { Router } = require("express")
const TagsController = require("../controllers/tagsController")

const tagsController = new TagsController

const tagsRoutes = Router()

tagsRoutes.post("/", tagsController)

module.exports = tagsRoutes