import { gql } from '@apollo/client';

export const ADD_ANIMAL = gql`
  mutation AddAnimal($name: String!, $description: String!, $age: String!, $imageUrl: String!, $type: String!) {
    addAnimal(name: $name, description: $description, age: $age, imageUrl: $imageUrl, type: $type) {
      id
      name
      description
      age
      imageUrl
      type
    }
  }
`;

export const EDIT_ANIMAL = gql`
  mutation EditAnimal($id: ID!, $name: String, $description: String, $age: String, $imageUrl: String, $type: String) {
    editAnimal(id: $id, name: $name, description: $description, age: $age, imageUrl: $imageUrl, type: $type) {
      id
      name
      description
      age
      imageUrl
      type
    }
  }
`;
