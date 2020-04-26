const { buildSchema } = require("graphql");
const data = require("./data"); //wherever your data is

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







// const { buildSchema } = require("graphql");
// const data = require("./data"); //wherever your data is

// const schema = buildSchema(`
//   type Pokemon {
//     id: String
//     name: String!
//     classification: String
//     types: [String]
//     resistant: [String]
//     weaknesses: [String]
//     weight: WeightOrHeight
//     height: WeightOrHeight
//     fleeRate: Float
//     evolutionRequirements: EvolutionRequirements
//     evolutions: [Evolutions]
//     maxCP: Int
//     maxHP: Int
//     attacks: Attacks
//   }

//   type WeightOrHeight {
//     minimum: String
//     maximum: String
//   }

//   type EvolutionRequirements {
//     amount: Int
//     name: String
//   }

//   type Evolutions {
//     id: Int
//     name: String
//   }

//   type Attacks {
//     fast: [Attack]
//     special: [Attack]
//   }

//   type Attack {
//     name: String
//     type: String
//     damage: Int
//   }

//   type HasAttack {
//     name: String
//     type: String
//     damage: Int
//   }

//   input PokemonInput {
//     id: String
//     name: String!
//     classification: String
//     types: [String]
//     resistant: [String]
//     weaknesses: [String]
//     weight: WeightOrHeightInput
//     height: WeightOrHeightInput
//     fleeRate: Float
//     evolutionRequirements: EvolutionRequirementsInput
//     evolutions: [EvolutionsInput]
//     maxCP: Int
//     maxHP: Int
//     attacks: AttacksInput
//   }

//  input WeightOrHeightInput {
//     minimum: String
//     maximum: String
//   }

//  input EvolutionRequirementsInput {
//     amount: Int
//     name: String
//   }

//   input EvolutionsInput {
//     id: Int
//     name: String
//   }

// input AttacksInput {
//     fast: [AttackInput]
//     special: [AttackInput]
//   }

// input AttackInput {
//     name: String
//     type: String
//     damage: Int
//   }

//   type Query {
//     Pokemons: [Pokemon]
//     Pokemon(id: String, name: String): Pokemon
//     HasType(type: String): [Pokemon]
//     HasAttack(attack: String): [Pokemon]
//     AllAttacks: Attacks
//     AttacksByType(type: String): [Attack]
//     Types: [String]
//   }

//   type Mutation {
//     AddType(type: String): [String]
//     AddPokemon(input: PokemonInput): [Pokemon]
//     AddAttack(type: String, input: AttackInput): Attacks
//     DeleteType(type: String): [String]
//     DeletePokemon(id: String, name: String): [Pokemon]
//     DeleteAttack(name: String): Attacks
//     ModifyPokemon(id: String, name: String, input: PokemonInput): [Pokemon]
//     ModifyType(type: String, typeInput: String): [String]
//     ModifyAttacks(name: String, input: AttackInput): Attacks
//   }

// `);
