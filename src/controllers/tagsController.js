const { request, response } = require('express')
const knex = require('../database/knex/index')


class TagsController {
    async create(request, response) {
        const { name } = request.body

        await knex('tags').insert({ name })

        return response.json()
    }

    async delete(request, response) {
        const user_id = request.params
        const movies_id = request.params
        const { name } = request.body

        await knex('tags').create({
            user_id,
            movies_id,
            name
        })
        return response.json()
    }


}

module.exports = TagsController