import { createSlice } from "@reduxjs/toolkit";
import { ContactUsProps } from "../models/types.types";

const initialState: ContactUsProps = { onShow: false };

const contactUsSlice = createSlice({
  name: "contactus",
  initialState,
  reducers: {
    showContactus: (state) => {
      state.onShow = true;
      return state;
    },
    hideContactus: (state) => {
      state.onShow = false;
      return state;
    },
  },
});

export const contactActions = contactUsSlice.actions;

export default contactUsSlice.reducer;
