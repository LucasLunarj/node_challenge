const { request, response } = require('express')
const { hash, compare } = require('bcryptjs')
const knex = require('../database/knex/index')
const AppError = require('../utils/AppError.js')

class UsersController {
    async create(request, response) {
        const { name, email } = request.body
        const isThisEmailRegistered = await knex('users').where({ email }).first()
        const password = await hash(request.body.password, 8)

        console.log(isThisEmailRegistered)

        if (isThisEmailRegistered) {
            console.log('email registrado')
            return
        } else {
            await knex("users").insert({
                name,
                email,
                password
            })
        }

        response.json()
    }

    async delete(request, response) {
        const { id } = request.params
        await knex("users").where({ id }).delete()

        return response.json()
    }

    async show(request, response) {
        const { id } = request.params
        const users = await knex('users').where({ id })
        const moviesRegistered = await knex('movies').where({ user_id: id })

        return response.json({
            ...users,
            moviesRegistered
        })
    }
}

module.exports = UsersController