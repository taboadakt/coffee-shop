import { getDb } from "../dataSources/dbConnection";
import { menu, orderDrink } from "./menu";
import { Context, UpdateStockInput } from "./types";

const resolvers = {
  Query: {
    menu,
    inventory: async () => {
      const db = await getDb();
      return db.getInventory();
    },
  },
  Mutation: {
    updateStock: async (_: unknown, { input }: { input: UpdateStockInput }) => {
      const db = await getDb();
      return db.updateStock(input);
    },
    orderDrink,
  },
};

export default resolvers;
