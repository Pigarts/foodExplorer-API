exports.up = knex => {
    return knex.raw('PRAGMA timezone = "America/Sao_Paulo"').then(() => {
      return knex.schema.createTable("ingredients", table => {
        table.increments("id");
        table.text("name");
        table.text("product_id").references("id").inTable("products").onDelete("CASCADE");
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTable("ingredients");
  };
  