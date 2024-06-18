import { gql } from '@apollo/client';

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

export const GET_DONKEYS = gql`
  query GetDonkeys {
    animalsType(type: "donkey/mule") {
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

export const GET_BIRDS = gql`
  query GetBirds {
    animalsType(type: "bird") {
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

export const GET_SHEEP = gql`
  query GetSheep {
    animalsType(type: "sheep/goat") {
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

export const GET_OTHER = gql`
  query GetOther {
    animalsType(type: "other") {
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