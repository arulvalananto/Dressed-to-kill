import { createSlice } from "@reduxjs/toolkit";

import { SHOP_DATA } from "../../data/shop";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        collections: SHOP_DATA,
    },
    reducers: {},
});

// export const {} = shopSlice.actions;

export default shopSlice.reducer;
