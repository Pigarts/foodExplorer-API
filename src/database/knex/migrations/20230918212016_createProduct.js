exports.up = knex => {
    return knex.raw('PRAGMA timezone = "America/Sao_Paulo"').then(() => {
      return knex.schema.createTable("products", table => {
        table.increments("id");
        table.text("category");
        table.text("name");
        table.text("descriptions");
        table.text("price");
        table.text("img");
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTable("products");
  };
  