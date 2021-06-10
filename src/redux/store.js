import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
import { persistStore } from "redux-persist";

export const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware()],
});

export const persistor = persistStore(store);

export default store;
