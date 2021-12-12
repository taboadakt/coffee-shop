import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../apollo/client";
import { GET_INVENTORY, ORDER_DRINK } from "../graphql/client/requests";
import { setInventory, setMenu } from "./reducers";
import { AsyncThunkConfig, ThunkActionTypes } from "./types";

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
