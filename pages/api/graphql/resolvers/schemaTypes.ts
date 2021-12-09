import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Variant {
    id: ID!
    name: String!
  }

  type Query {
    menu: [Drink]
    inventory: [IngredientInventory]
  }

  type Ingredient {
    id: ID!
    name: String!
  }

  type IngredientInventory {
    ingredient: Ingredient!
    stockFlOz: Float!
  }

  type Measurement {
    ingredient: Ingredient!
    measureFlOz: Float!
    variant: Variant
  }

  type Drink {
    id: ID!
    name: String!
    price: Float!
    measurements: [Measurement]!
  }
`;
