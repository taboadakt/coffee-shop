import { addStoreSchema, createStore, dbLoadTestData } from "./utils";
import DB from "./db";

let db: DB;

const initDb = async () => {
  const initStore = await createStore();
  const schemaStore = await addStoreSchema(initStore);
  const store = await dbLoadTestData(schemaStore);
  return new DB({ store });
};

export const getDb = async (): Promise<DB> => {
  if (db) return db;
  db = await initDb();
  return db;
};
