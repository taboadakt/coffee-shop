import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    menu: Menu
    inventory: [IngredientInventory]
  }

  type Mutation {
    orderDrink(input: OrderDrinkInput): [IngredientInventory]
    updateStock(input: UpdateStockInput): [IngredientInventory]
  }

  input OrderDrinkInput {
    id: ID!
  }

  input UpdateStockInput {
    id: ID!
    measureFlOz: Float!
  }

  type UpdateStockPayload {
    remainingStock: Float!
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
    id: ID!
    name: String!
    stockFlOz: Float!
  }

  type Measurement {
    ingredientId: String!
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
