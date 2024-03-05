const { request, response } = require('express')
const knex = require('../database/knex/index')


class TagsController {
    async create(request, response) {
        const { name } = request.body

        await knex('tags').insert({ name })
    }
}

module.exports = TagsController