import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        hidden: true,
    },
    reducers: {
        TOGGLE_CART: (cart, action) => {
            return {
                ...cart,
                hidden: !cart.hidden,
            };
        },
    },
});

export const { TOGGLE_CART } = cartSlice.actions;

export default cartSlice.reducer;
