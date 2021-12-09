import { Drink } from "../types";
import { ingredientCatalog } from "../ingredientCatalog";

export const menu = (): Drink[] => {
  return [
    {
      id: "latte",
      name: "Latte",
      price: 8.99,
      measurements: [
        {
          ingredient: ingredientCatalog.milk,
          measureFlOz: 0.7,
          variant: {
            id: "milkFoam",
            name: "Milk foam",
          },
        },
        {
          ingredient: ingredientCatalog.milk,
          measureFlOz: 10,
          variant: {
            id: "steamedMilk",
            name: "Steamed milk",
          },
        },
        {
          ingredient: ingredientCatalog.espresso,
          measureFlOz: 2,
        },
      ],
    },
  ];
};
