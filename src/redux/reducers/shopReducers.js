import { createSlice } from "@reduxjs/toolkit";

// import { SHOP_DATA } from "../../data/shop";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    collections: [],
  },
  reducers: {
    FETCH_COLLECTIONS: (shop, action) => {
      return { ...shop, collections: action.payload };
    },
  },
});

export const { FETCH_COLLECTIONS } = shopSlice.actions;

export default shopSlice.reducer;
