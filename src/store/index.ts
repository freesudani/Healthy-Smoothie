import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reviewReducer from "./rev";
import contactusReducer from "./cntus";
import drinksfoodsReducer from "./dnf";
import heroReducer from "./hero";
import jobReducer from "./jobs";

export const store = configureStore({
  reducer: combineReducers({
    review: reviewReducer,
    cntus: contactusReducer,
    drinkfood: drinksfoodsReducer,
    hero: heroReducer,
    jobs: jobReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
