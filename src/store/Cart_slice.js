import { createSlice } from "@reduxjs/toolkit";
//{{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
const initialState = {
  // 배열하나 만들어서 실행.
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        })
      } else {
        existingItems.quantity += 1;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  }
});

export const cartAction = cartSlice.actions;
export default cartSlice;
