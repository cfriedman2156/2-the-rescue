import { gql } from '@apollo/client';

export const GET_HORSES = gql`
  query GetHorses {
    animals(type: "horse") {
      id
      name
      description
      imageUrl
    }
  }
`;