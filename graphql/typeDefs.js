import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Animal {
    id: ID!
    name: String!
    description: String
    age: String
    imageUrl: String
    type: String!
  }

  type Query {
    animals(type: String!): [Animal]
    animal(id: ID!): Animal
  }

  type Mutation {
    addAnimal(name: String!, description: String, age: String, imageUrl: String, type: String!): Animal
    editAnimal(id: ID!, name: String, description: String, age: String, imageUrl: String, type: String): Animal
  }
`;

export default typeDefs;
