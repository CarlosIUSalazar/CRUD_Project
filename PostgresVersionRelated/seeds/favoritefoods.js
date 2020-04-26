//insert initial data into database
const favfoods = require("../favfoods");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("favfoods")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("favfoods").insert(favfoods);
    });
};
