import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        link: "/shop/hats",
        title: "HATS",
        imageUrl:
            "https://images.unsplash.com/photo-1550314124-301ca0b773ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80",
    },
    {
        id: 2,
        link: "/shop/jackets",
        title: "JACKETS",
        imageUrl:
            "https://images.unsplash.com/photo-1616258734679-57e515f9cdc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        id: 3,
        link: "/shop/sneakers",
        title: "SNEAKERS",
        imageUrl:
            "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    },
    {
        id: 4,
        link: "/shop/men",
        title: "MEN",
        size: "large",
        imageUrl:
            "https://images.unsplash.com/photo-1603086360919-8b8eacad64bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        id: 5,
        link: "/shop/women",
        title: "WOMEN",
        size: "large",
        imageUrl:
            "https://images.unsplash.com/photo-1551856593-6b804e113a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
];

const directorySlice = createSlice({
    name: "directory",
    initialState: initialState,
    reducers: {},
});

export const { FETCH_DIRECTORY } = directorySlice.actions;

export default directorySlice.reducer;
