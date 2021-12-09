import { Drink } from "../types";

export const menu = (): Drink[] => {
  return [
    {
      id: "latte",
      name: "Latte",
      price: 8.99,
      ingredients: [
        {
          id: "milk-foam",
          name: "Milk foam",
          amountFlOz: 0.7,
        },
        {
          id: "steamed-milk",
          name: "Steamed milk",
          amountFlOz: 10,
        },
        {
          id: "espresso",
          name: "Espresso",
          amountFlOz: 2,
        },
      ],
    },
  ];
};
