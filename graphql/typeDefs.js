import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Animal {
    id: ID!
    name: String!
    description: String
    age: String
    adoption: Boolean
    profileImage: String
    photos: [String]
    type: String!
  }

  type Query {
    animalsType(type: String!): [Animal]
    animals: [Animal]
    animal(id: ID!): Animal
    horseByName(name: String!): Animal
  }

  type Mutation {
    addAnimal(name: String!, description: String, age: String, adoption: Boolean, profileImage: String, photos: [String], type: String!): Animal
    editAnimal(id: ID!, name: String, description: String, age: String, adoption: Boolean, profileImage: String, photos: [String], type: String): Animal
    deleteAnimal(id: ID!): Animal
  }
`;

export default typeDefs;
