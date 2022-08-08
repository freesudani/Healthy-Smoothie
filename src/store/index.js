import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reviewReducer from "./rev.ts";

export const store = configureStore({
  reducer: combineReducers({ review: reviewReducer }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
