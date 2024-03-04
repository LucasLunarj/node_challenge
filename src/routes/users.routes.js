const { Router } = require('express')
const UsersController = require('../controllers/usersController')
const userRoutes = Router()

const usersController = new UsersController()

userRoutes.post('/', usersController.create)
userRoutes.delete('/:id', usersController.delete)

module.exports = userRoutes