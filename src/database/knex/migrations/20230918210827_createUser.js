
exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id")
    table.text("name")
    table.text("email")
    table.text("password")
    table.text("address﻿")
    table.text("adm")
    table.timestamp("created_at").default(knex.fn.now())
    });
    
exports.down = knex => knex.schema.dropTable("users")
    