import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IngredientInventory,
  Menu,
} from "../pages/api/graphql/resolvers/types";
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
  },
});

export const { setInventory, setMenu } = appStateSlice.actions;
export default appStateSlice.reducer;
