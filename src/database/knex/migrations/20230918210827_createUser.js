exports.up = knex => {
    return knex.raw('PRAGMA timezone = "America/Sao_Paulo"').then(() => {
      return knex.schema.createTable("users", table => {
        table.increments("id");
        table.text("name");
        table.text("email");
        table.text("password");
        table.text("address");
        table.enum("role", ["adm", "costumer"], {useNative: true, enumName: "roles"}).defaultTo("costumer").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
      });
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTable("users");
  };
  