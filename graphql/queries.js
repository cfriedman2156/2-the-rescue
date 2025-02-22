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

export const GET_ANIMAL_BY_NAME = gql`
  query GetAnimalByName($name: String!) {
    animalByName(name: $name) {
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

export const GET_PIGS = gql`
  query GetPigs {
    animalsType(type: "pig") {
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

export const GET_ADOPTION_AVAILABLE = gql`
  query GetAdoptionAvailable {
    animalByAdoption(adoption: true) {
      id
      type
      name
      description
      age
      adoption
      profileImage
      photos
    }
  }
`;