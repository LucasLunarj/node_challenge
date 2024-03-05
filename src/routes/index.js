const { Router } = require('express')

const userRoutes = require('./users.routes')
const moviesRoutes = require('./movies.routes')

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/movies', moviesRoutes)

module.exports = routes