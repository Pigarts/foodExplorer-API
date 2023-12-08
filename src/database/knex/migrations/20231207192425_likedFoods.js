
exports.up = knex => knex.schema.createTable("likedFoods", table => {
    table.increments("id")
    table.text("name")
    table.text("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.text("product_id").references("id").inTable("products").onDelete("CASCADE")
    table.timestamp("liked_at").default(knex.fn.now())
    });
    
exports.down = knex => knex.schema.dropTable("likedFoods")
    