import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: {
    showSellRegister: false,
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    onViewChange: (state, action) => {
      Object.assign(state.view, action.payload);
    },
  },
});

export const { onViewChange } = globalSlice.actions;

export const globalSelector = (state) => state.globalSlice;

export default globalSlice.reducer;
