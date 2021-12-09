import DB from "../dataSources/db";

export type Ingredient = {
  id: string;
  name: string;
};

export type Menu = {
  drinks: Drink[];
};

export type Variant = {
  id: string;
  name: string;
};

export type IngredientInventory = {
  id: string;
  name: string;
  stockFlOz: number;
};

export type Measurement = {
  ingredientId: string;
  measureFlOz: number;
  variant?: Variant;
};

export type Drink = {
  id: string;
  name: string;
  price: number;
  measurements: Measurement[];
};

export interface Context {
  dataSources: {
    db: DB;
  };
}

export type UpdateStockInput = {
  id: string;
  measureFlOz: number;
};

export type OrderDrinkInput = {
  id: string;
};

export type UpdateStockPayload = {
  remainingStock: number;
};
