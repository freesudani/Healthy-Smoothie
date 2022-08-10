import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/Reviews";
import { ReviewStateProps } from "../models/types.types";

const initialState: ReviewStateProps = { index: 0 };

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    nextPerson: (state) => {
      let newIndex = state.index + 1;
      if (newIndex > data.length - 1) {
        state.index = 0;
        return state;
      }
      if (newIndex < 0) {
        state.index = data.length - 1;
        return state;
      }
      return state;
    },
    prevPerson: (state) => {
      let newIndex = state.index - 1;
      if (newIndex > data.length - 1) {
        state.index = 0;
        return state;
      }
      if (newIndex < 0) {
        state.index = data.length - 1;
        return state;
      }
      return state;
    },
  },
});

export const reviewActions = reviewSlice.actions;

export default reviewSlice.reducer;
