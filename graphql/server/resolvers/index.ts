import { getDb } from "../dataSources/dbConnection";
import { menu, orderDrink } from "./menu";
import { IngredientInventory, UpdateStockInput } from "./types";

const resolvers = {
  Query: {
    menu,
    inventory: async () => {
      const db = await getDb();
      return db.getInventory();
    },
  },
  Mutation: {
    updateStock: async (
      _: unknown,
      { input }: { input: UpdateStockInput }
    ): Promise<IngredientInventory[]> => {
      const db = await getDb();
      await db.updateStock(input);
      return db.getInventory();
    },
    orderDrink,
  },
};

export default resolvers;
