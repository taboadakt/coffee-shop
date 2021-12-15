import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IngredientInventory, Menu } from "../graphql/server/resolvers/types";
import { initialState } from "./types";

const appStateSlice = createSlice({
  name: "coffeeShop",
  initialState,
  reducers: {
    setInventory(state, action: PayloadAction<IngredientInventory[]>) {
      state.inventory = action.payload;
    },
    setMenu(state, action: PayloadAction<Menu>) {
      state.menu = action.payload;
    },
    addToOutOfStock(state, action: PayloadAction<string>) {
      state.outOfStock = [...state.outOfStock, action.payload];
    },
    HYDRATE(state, action) {
      return {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
    },
  },
});

export const { setInventory, setMenu, addToOutOfStock, HYDRATE } =
  appStateSlice.actions;
export default appStateSlice.reducer;
