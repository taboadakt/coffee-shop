import { Dispatch } from "@reduxjs/toolkit";
import {
  IngredientInventory,
  Menu,
} from "../pages/api/graphql/resolvers/types";

export interface AppState {
  inventory?: IngredientInventory[];
  menu?: Menu;
}

export const initialState = {
  inventory: undefined,
  menu: undefined,
} as AppState;

export enum ThunkActionTypes {
  getInventory = "getInventory",
  orderDrink = "orderDrink",
  getMenu = "getMenu",
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
