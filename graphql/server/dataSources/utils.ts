import { ModelCtor, Sequelize } from "sequelize";
import { generateIngredientInventoryModel } from "./models/inventory/model";

export interface StoreInterface {
  db: Sequelize;
  IngredientInventory: ModelCtor<any>;
}

export const createStore = async (): Promise<Sequelize> => {
  return new Sequelize("sqlite::memory", { logging: false });
};

export const addStoreSchema = async (
  db: Sequelize
): Promise<StoreInterface> => {
  const IngredientInventory = generateIngredientInventoryModel(db);
  await db.sync();
  return { db, IngredientInventory };
};

export const dbLoadTestData = async (
  store: StoreInterface
): Promise<StoreInterface> => {
  await store.IngredientInventory.bulkCreate(
    require("./models/inventory/data.json")
  );
  return store;
};
