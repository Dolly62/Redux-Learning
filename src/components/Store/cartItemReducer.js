import { createSlice } from "@reduxjs/toolkit";


const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    changed: false, 
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.cartItems;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true;
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
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existItem = state.cartItems.find(
        (itemToDel) => itemToDel.id === id
      );
      state.totalQuantity--;
      state.changed = true;
      if (existItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (itemToRemove) => itemToRemove.id !== id
        );
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
      
    },
  },
});



export const cartItemAction = cartItemSlice.actions;

export default cartItemSlice.reducer;
