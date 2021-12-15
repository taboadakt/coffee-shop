import { StoreInterface } from "./utils";
import { DataSource } from "apollo-datasource";
import {
  IngredientInventory,
  UpdateStockInput,
  UpdateStockPayload,
} from "../resolvers/types";

class DB extends DataSource {
  private store: StoreInterface;
  constructor({ store }: { store: any }) {
    super();
    this.store = store;
  }
  public async getInventory(): Promise<IngredientInventory[]> {
    return this.store.IngredientInventory.findAll();
  }
  public async updateStock({
    id,
    measureFlOz,
  }: UpdateStockInput): Promise<UpdateStockPayload> {
    const currentStock = await this.store.IngredientInventory.findByPk(id);
    const updatedStock = currentStock.stockFlOz - measureFlOz;
    if (updatedStock < 0) throw new Error("Not enough inventory!");
    await this.store.IngredientInventory.update(
      { stockFlOz: currentStock.stockFlOz - measureFlOz },
      { where: { id: id } }
    );
    const newStock = await this.store.IngredientInventory.findByPk(id);
    return { remainingStock: newStock.stockFlOz };
  }
}

export default DB;
