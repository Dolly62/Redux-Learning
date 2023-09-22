import { createSlice } from "@reduxjs/toolkit";

const initialCartItems = {
  cartItems: [],
  totalQuantity: 0,
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: initialCartItems,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
          (existingItem.totalPrice = existingItem.totalPrice + newItem.price);
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const itemRemove = action.payload;
      const existItem = state.cartItems.find(
        (itemToDel) => itemToDel.id === itemRemove
      );
      if (existItem && existItem.quantity  === 1) {
        state.cartItems = state.cartItems.filter(
          (itemToRemove) => itemToRemove.id !== itemRemove
        );
      } else {
        existItem.quantity--;
          (existItem.totalPrice = existItem.totalPrice - itemRemove.price);
      }
      state.totalQuantity--;
    }
  },
});

export const cartItemAction = cartItemSlice.actions;

export default cartItemSlice.reducer;
