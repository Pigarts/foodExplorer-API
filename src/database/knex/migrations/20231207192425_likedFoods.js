exports.up = knex => {
    return knex.raw('PRAGMA timezone = "America/Sao_Paulo"').then(() => {
      return knex.schema.createTable("likedFoods", table => {
        table.increments("id");
        table.text("name");
        table.text("user_id").references("id").inTable("users").onDelete("CASCADE");
        table.text("product_id").references("id").inTable("products").onDelete("CASCADE");
        table.timestamp("liked_at").defaultTo(knex.fn.now());
      });
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTable("likedFoods");
  };
  