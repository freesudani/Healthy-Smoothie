import { createSlice } from "@reduxjs/toolkit";

import { DandFStateProps } from "../models/types.types";

const initialState: DandFStateProps = { itemId: undefined };

const drinkandfoodSlice = createSlice({
  name: "drinkandfood",
  initialState,
  reducers: {
    setItemId: (state, action) => {
      state.itemId = action.payload;
      return state;
    },
  },
});

export const drinkandFoodActions = drinkandfoodSlice.actions;

export default drinkandfoodSlice.reducer;
