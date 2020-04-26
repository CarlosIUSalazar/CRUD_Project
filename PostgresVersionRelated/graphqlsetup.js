const config = require("./config");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const personData = require("./data.json");

// initialize a connection to the database
const knex = require("knex")(config.db);

const schema = buildSchema(`
type Person {
    id: String
    name: String
    lastname:  String
    favorite_food: String
}

input PersonInput {
  id: String
  name: String
  lastname:  String
  favorite_food: String
}

 type Query {
    Persons: [Person]
    PersonsByName(name: String): [Person]
}

  type Mutation {
    AddPerson(input: PersonInput): [Person]
    EditPerson(id: String, input: PersonInput): [Person]
    DeletePerson(id: String): [Person]
  }
 `);

const resolvers = {
  Persons: () => {
    //READ
    return knex("favfoods")
      .select()
      .then((favfoods) => {
        return favfoods;
      });
  },
  AddPerson: async (request) => {
    //CREATE
    return knex("favfoods").insert({
      name: request.input.name,
      lastname: request.input.lastname,
      favorite_food: request.input.favorite_food,
    });
  },
  EditPerson: async (request) => {
    //UPDATE
    return knex("favfoods").where("id", "=", request.id).update({
      name: request.input.name,
      lastname: request.input.lastname,
      favorite_food: request.input.favorite_food,
    });
  },
  DeletePerson: async (request) => {
    //DELETE
    return knex("favfoods").del().where("id", "=", request.id);
  },
};

// Start express server
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});




