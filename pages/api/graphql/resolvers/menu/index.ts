import { getDb } from "../../dataSources/dbConnection";
import { Menu, Drink, OrderDrinkInput, Context } from "../types";

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
): Promise<boolean> => {
  const db = await getDb();
  const myDrink = drinks().find(
    (drink: Drink): boolean => drink.id === input.id
  );
  if (!myDrink) throw new Error("Pick a drink on the menu please");

  for (let i = 0; i < myDrink.measurements.length; i++) {
    const measurement = myDrink.measurements[i];
    // console.log({
    //   id: measurement.ingredientId,
    //   measureFlOz: measurement.measureFlOz,
    // });
    const remaining = await db.updateStock({
      id: measurement.ingredientId,
      measureFlOz: measurement.measureFlOz,
    });
    // console.log(remaining);
  }
  // myDrink.measurements.forEach(async (measurement) => {
  //   console.log({
  //     id: measurement.ingredientId,
  //     measureFlOz: measurement.measureFlOz,
  //   });
  //   const remaining = await db.updateStock({
  //     id: measurement.ingredientId,
  //     measureFlOz: measurement.measureFlOz,
  //   });
  //   console.log(remaining);
  // });
  return true;
};
