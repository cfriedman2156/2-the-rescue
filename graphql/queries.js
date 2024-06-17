import { gql } from '@apollo/client';

export const GET_HORSES = gql`
  query GetHorses {
    animalsType(type: "horse") {
      id
      name
      description
      age
      adoption
      profileImage
      photos
    }
  }
`;

export const GET_ANIMALS = gql`
  query GetAnimals {
    animals {
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