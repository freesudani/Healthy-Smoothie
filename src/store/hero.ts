import { createSlice } from "@reduxjs/toolkit";
import { HeroStateProps } from "../models/types.types";

const initialState: HeroStateProps = { showSlide: false };

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    showSlideone: (state) => {
      state.showSlide = false;
      return state;
    },
    showSlidetwo: (state) => {
      state.showSlide = true;
      return state;
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice.reducer;
