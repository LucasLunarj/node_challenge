const { Router } = require('express')

const userRoutes = require('./users.routes')
const moviesRoutes = require('./movies.routes')
const tagsRoutes = require('./tags.routes')

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/movies', moviesRoutes)
routes.use('/tags', tagsRoutes)

module.exports = routes