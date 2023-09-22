import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isShown: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    cartShown(state) {
      state.isShown = !state.isShown;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
