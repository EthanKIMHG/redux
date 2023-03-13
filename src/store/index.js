import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UI_slice";
import cartSlice from "./Cart_slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
})

export default store;
