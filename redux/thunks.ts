import { gql } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../apollo/client";
import { setInventory, setMenu } from "./reducers";
import { AsyncThunkConfig, ThunkActionTypes } from "./types";

const GET_INVENTORY = gql`
  query Inventory {
    inventory {
      id
      name
      stockFlOz
    }
  }
`;
export const getInventory = createAsyncThunk(
  ThunkActionTypes.getInventory,
  async (_: void, thunkAPI: AsyncThunkConfig) => {
    const { data, error } = await client.query({
      query: GET_INVENTORY,
    });
    if (data) {
      thunkAPI.dispatch(setInventory(data.inventory));
    }
  }
);

const GET_MENU = gql`
  query Menu {
    menu {
      drinks {
        id
        name
        price
        measurements {
          ingredientId
          measureFlOz
          variant {
            id
            name
          }
        }
      }
    }
  }
`;
export const getMenu = createAsyncThunk(
  ThunkActionTypes.getMenu,
  async (_: void, thunkAPI: AsyncThunkConfig) => {
    const { data, error } = await client.query({
      query: GET_MENU,
    });
    if (data) {
      thunkAPI.dispatch(setMenu(data.menu));
    }
  }
);

const ORDER_DRINK = gql`
  mutation orderDrink($input: OrderDrinkInput) {
    orderDrink(input: $input) {
      id
      name
      stockFlOz
    }
  }
`;

export const orderDrink = createAsyncThunk(
  ThunkActionTypes.orderDrink,
  async (id: string, thunkAPI: AsyncThunkConfig) => {
    const result = await client.mutate({
      variables: {
        input: {
          id,
        },
      },
      mutation: ORDER_DRINK,
    });
    console.log(result);
    if (result.data.orderDrink) {
      thunkAPI.dispatch(setInventory(result.data.orderDrink));
    } else {
      // TOO errors
    }
  }
);
