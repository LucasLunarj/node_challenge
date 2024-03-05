const { request, response } = require('express')
const knex = require('../database/knex/index')


class TagsController {
    create(request, response) {
        const { name } = request.body
    }
}