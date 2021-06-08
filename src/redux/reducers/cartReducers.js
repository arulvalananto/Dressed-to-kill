import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        hidden: true,
        cartItems: [],
    },
    reducers: {
        TOGGLE_CART: (cart, action) => {
            return {
                ...cart,
                hidden: !cart.hidden,
            };
        },
        ADD_ITEM: (cart, action) => {
            const existingCartItem = cart.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingCartItem) {
                const updateCartItem = cart.cartItems.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return {
                    ...cart,
                    cartItems: updateCartItem,
                };
            }
            return {
                ...cart,
                cartItems: [
                    ...cart.cartItems,
                    { ...action.payload, quantity: 1 },
                ],
            };
        },
    },
});

export const { TOGGLE_CART, ADD_ITEM } = cartSlice.actions;

export default cartSlice.reducer;

// Selector

export const selectCart = createSelector((state) => state);
