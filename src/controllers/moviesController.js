const { request, response } = require('express')
const knex = require('../database/knex/index')

class MoviesController {
    async create(request, response) {
        const { title, description, rating } = request.body
        const { user_id } = request.params
        const movieIsAdded = await knex('movies').where({ title }).first()


        if (movieIsAdded) {
            console.log('Filme já registrado')
            return;
        } else {
            await knex('movies').insert({
                title, description, rating, user_id
            })
        }


        response.json()
    }

    async delete(request, response) {
        const { id } = request.params

        await knex('movies').where({ id }).delete()

        response.json()
    }
}

module.exports = MoviesController