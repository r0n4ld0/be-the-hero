exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("celular").notNullable();
    table.string("city").notNullable();
    table.string("state", 2).notNullable();
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
