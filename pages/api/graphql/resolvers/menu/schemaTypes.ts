import { gql } from "apollo-server-micro";

export const menuSchemas = gql`
  type Ingredient {
    id: ID!
    name: String!
    amountFlOz: Float!
  }

  type Drink {
    id: ID!
    name: String!
    price: Float!
    ingredients: [Ingredient]!
  }
`;
