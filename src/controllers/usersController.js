const { request, response } = require('express')
const knex = require('../database/knex/index')
const AppError = require('../utils/AppError.js')

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body
        const isThisEmailRegistered = await knex('users').where({ email })
        const filtered = isThisEmailRegistered.filter((item) => item.email == email)


        isThisEmailRegistered.map(async item => {
            if (item.email === email) {
                console.log('email existe')
                return;
            }
        })


        await knex("users").insert({
            name,
            email,
            password
        })


        response.json()
    }

    async delete(request, response) {
        const { id } = request.params
        await knex("users").where({ id }).delete()

        return response.json()
    }
}

module.exports = UsersController