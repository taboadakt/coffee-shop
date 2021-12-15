import { Drink } from "../types";

// TODO move that into the data base
export const drinks = (): Drink[] => {
  return [
    {
      id: "2ffe9983-62c2-4627-bc47-15b0d4b71cdb",
      name: "Latte",
      price: 8.99,
      measurements: [
        {
          ingredientId: "31096b88-2113-4861-ab8b-18c786568f87",
          measureFlOz: 0.7,
          variant: {
            id: "milkFoam",
            name: "Milk foam",
          },
        },
        {
          ingredientId: "31096b88-2113-4861-ab8b-18c786568f87",
          measureFlOz: 10,
          variant: {
            id: "steamedMilk",
            name: "Steamed milk",
          },
        },
        {
          ingredientId: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
          measureFlOz: 2,
        },
      ],
    },
    {
      id: "59f94d06-49a2-4e75-8a58-9316eb90ab4b",
      name: "Mocha Breve",
      price: 10.99,
      measurements: [
        {
          ingredientId: "f91e31b5-298f-4f3a-bd09-a0ba2f8b8e8b",
          measureFlOz: 2,
        },
        {
          ingredientId: "c60841db-58b2-4b25-a432-abc7fad2294e",
          measureFlOz: 2,
        },
        {
          ingredientId: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
          measureFlOz: 2,
        },
      ],
    },
    {
      id: "33f92a50-bae5-422c-98d9-4e6c8cc3c29d",
      name: "Cafe Macchiato",
      price: 10.99,
      measurements: [
        {
          ingredientId: "31096b88-2113-4861-ab8b-18c786568f87",
          measureFlOz: 0.7,
          variant: {
            id: "milkFoam",
            name: "Milk foam",
          },
        },
        {
          ingredientId: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
          measureFlOz: 2,
        },
      ],
    },
    {
      id: "f16b84c6-e576-49e6-98ec-c419ec4df6a5",
      name: "Con Panna",
      price: 10.99,
      measurements: [
        {
          ingredientId: "cb64606b-3615-4377-986f-e8c8582f0548",
          measureFlOz: 3,
        },
        {
          ingredientId: "cca81bc9-b597-4d4e-afa7-53701c2070b9",
          measureFlOz: 2,
        },
      ],
    },
  ];
};
