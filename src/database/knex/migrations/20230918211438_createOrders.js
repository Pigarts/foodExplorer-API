exports.up = knex => {
    return knex.raw('PRAGMA timezone = "America/Sao_Paulo"').then(() => {
      return knex.schema.createTable("orders", table => {
        table.increments("id");
        table.integer("user_id").references("id").inTable("users");
        table.integer("details");
        table.integer("status");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      });
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTable("orders");
  };
  