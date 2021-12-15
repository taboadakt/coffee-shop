import { Dispatch } from "@reduxjs/toolkit";
import { IngredientInventory, Menu } from "../graphql/server/resolvers/types";

export interface AppState {
  inventory?: IngredientInventory[];
  menu?: Menu;
  outOfStock: string[];
}

export const initialState = {
  inventory: undefined,
  menu: undefined,
  outOfStock: [],
} as AppState;

export enum ThunkActionTypes {
  getInventory = "getInventory",
  orderDrink = "orderDrink",
}

// non-experted type from redux-toolkit
export type AsyncThunkConfig = {
  dispatch: Dispatch;
  getState: () => any;
  extra: any;
  requestId: string;
  signal: AbortSignal;
  rejectWithValue: any;
  fulfillWithValue: any;
};
