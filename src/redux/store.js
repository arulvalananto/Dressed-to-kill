import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

export default configureStore({
    reducer: reducers,
    middleware: [
        ...getDefaultMiddleware(),
        
    ]
});
