import { IngredientInventory } from "../types";
import { ingredientCatalog } from "../ingredientCatalog";

export const inventory = (): IngredientInventory[] => {
  return [
    {
      ingredient: ingredientCatalog.milk,
      stockFlOz: 10,
    },
    {
      ingredient: ingredientCatalog.espresso,
      stockFlOz: 10,
    },
  ];
};
