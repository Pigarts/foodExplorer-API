
exports.up = knex => knex.schema.createTable("products", table => {
    table.increments("id")
    table.text("category")
    table.text("name")
    table.text("descriptions")
    table.text("price")
    table.text("img")
    table.timestamp("created_at").default(knex.fn.now())
    });
    
exports.down = knex => knex.schema.dropTable("products")
    