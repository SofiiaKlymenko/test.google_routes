import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pathReducer from "./reducers/PathsSlice";

const rootReducer = combineReducers({
  pathReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
