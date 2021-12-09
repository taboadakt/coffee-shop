export type Ingredient = {
  id: string;
  name: string;
  amountFlOz: number;
};

export type Drink = {
  id: string;
  name: string;
  price: number;
  ingredients: Ingredient[];
};
