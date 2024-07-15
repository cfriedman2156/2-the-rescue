import { gql } from '@apollo/client';

export const ADD_ANIMAL = gql`
  mutation AddAnimal($name: String!, $description: String, $age: String, $adoption: Boolean!, $profileImage: String, $photos: [String], $type: String!) {
    addAnimal(name: $name, description: $description, age: $age, adoption: $adoption, profileImage: $profileImage, photos: $photos, type: $type) {
      id
      name
      description
      age
      adoption
      profileImage
      photos
      type
    }
  }
`;

export const EDIT_ANIMAL = gql`
  mutation EditAnimal($id: ID!, $name: String, $description: String, $age: String, $profileImage: String, $photos: [String], $type: String) {
    editAnimal(id: $id, name: $name, description: $description, age: $age, profileImage: $profileImage, photos: $photos, type: $type) {
      id
      name
      description
      age
      adoption
      profileImage
      photos
      type
    }
  }
`;

export const DELETE_ANIMAL = gql`
  mutation DeleteAnimal($id: ID!) {
    deleteAnimal(id: $id) {
      id
      name
    }
  }
`;

