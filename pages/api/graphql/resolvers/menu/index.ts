import { getDb } from "../../dataSources/dbConnection";
import { Menu, Drink, OrderDrinkInput, IngredientInventory } from "../types";

const drinks = (): Drink[] => {
  return [
    {
      id: "latte",
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
  ];
};
export const menu = (): Menu => {
  return {
    drinks: drinks(),
  };
};

export const orderDrink = async (
  _: unknown,
  { input }: { input: OrderDrinkInput }
): Promise<IngredientInventory[]> => {
  const db = await getDb();
  const myDrink = drinks().find(
    (drink: Drink): boolean => drink.id === input.id
  );
  if (!myDrink) throw new Error("Pick a drink on the menu please");

  // Too lazy to set up queuing so we're going serial
  for (let i = 0; i < myDrink.measurements.length; i++) {
    const measurement = myDrink.measurements[i];
    await db.updateStock({
      id: measurement.ingredientId,
      measureFlOz: measurement.measureFlOz,
    });
  }
  return db.getInventory();
};
