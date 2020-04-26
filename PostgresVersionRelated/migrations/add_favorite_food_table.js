exports.up = function (knex) {
  return knex.schema.createTable("favfoods", (t) => {
    t.increments().index();

    t.string("name").notNullable().index();

    t.string("lastname").notNullable();

    t.string("favorite_food").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("favfoods");
};
