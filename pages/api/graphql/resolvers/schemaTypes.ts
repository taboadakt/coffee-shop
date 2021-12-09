import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    menu: Menu
    inventory: [IngredientInventory]
  }

  type Menu {
    drinks: [Drink]!
  }

  type Variant {
    id: ID!
    name: String!
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
