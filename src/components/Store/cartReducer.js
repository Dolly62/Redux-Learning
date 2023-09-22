import { createSlice } from "@reduxjs/toolkit";


const initialCartState = {
    isShown: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        cartShown(state){
            state.isShown = !state.isShown;
        },
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;