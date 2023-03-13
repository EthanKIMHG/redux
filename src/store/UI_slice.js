import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartVisual: false};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.cartVisual = !state.cartVisual;
    }
  }
})

export const uiAction = uiSlice.actions;
export default uiSlice;