import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import cartItemReducer from "./cartItemReducer";


const store = configureStore({
reducer: {
    cart: cartReducer,
    cartItem: cartItemReducer,
}
})

export default store;