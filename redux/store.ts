import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import reducers from "./reducers";
import { AppState, initialState } from "./types";

const makeStore = (context: Context) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export const wrapper = createWrapper<Store<AppState>>(makeStore);
