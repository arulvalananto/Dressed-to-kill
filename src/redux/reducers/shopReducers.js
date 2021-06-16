import { createSlice } from "@reduxjs/toolkit";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    collections: [],
    isFetching: false,
    errorMessage: "",
  },
  reducers: {
    FETCH_COLLECTIONS_START: (shop, action) => {
      return {
        ...shop,
        isFetching: true,
      };
    },
    FETCH_COLLECTIONS_SUCCESS: (shop, action) => {
      return { ...shop, collections: action.payload, isFetching: false };
    },
    FETCH_COLLECTIONS_FAILURE: (shop, action) => {
      return { ...shop, isFetching: false, errorMessage: action.payload };
    },
  },
});

export const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_SUCCESS,
} = shopSlice.actions;

export default shopSlice.reducer;

// Action Creator

export const getCollections = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(FETCH_COLLECTIONS_START());
    collectionRef
      .get()
      .then((snapshot) => {
        const data = convertCollectionsSnapshotToMap(snapshot);
        dispatch(FETCH_COLLECTIONS_SUCCESS(data));
      })
      .catch((err) => dispatch(FETCH_COLLECTIONS_FAILURE(err.message)));
  };
};
