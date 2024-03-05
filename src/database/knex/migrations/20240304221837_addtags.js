const knex = require("knex");

exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.integer('user_id').references('id').inTable('users')
    table.integer('movies_id').references('id').inTable('movies').onDelete('cascade')
    table.text('name');
})


exports.down = knex => knex.schema.dropTable('tags')