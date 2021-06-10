import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: "",
    },
    reducers: {
        FETCHUSER: (user, action) => {
            return {
                ...user,
                currentUser: action.payload,
            };
        },
    },
});

export const { FETCHUSER } = userSlice.actions;

export default userSlice.reducer;

// Action Creator

export const fetchUser = (dispatch, getState) => (value) => {
    return dispatch(FETCHUSER(value));
};
