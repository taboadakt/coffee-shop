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
  ingredient: Ingredient;
  stockFlOz: number;
};

export type Measurement = {
  ingredient: Ingredient;
  measureFlOz: number;
  variant?: Variant;
};

export type Drink = {
  id: string;
  name: string;
  price: number;
  measurements: Measurement[];
};
