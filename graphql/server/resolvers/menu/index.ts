import { getDb } from "../../dataSources/dbConnection";
import { Menu, Drink, OrderDrinkInput, IngredientInventory } from "../types";
import { drinks } from "./drinks";

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
