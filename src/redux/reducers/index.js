import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducers from "./cartReducers";
import userReducers from "./userReducers";
import directoryReducers from "./directoryReducers";
import shopReducers from "./shopReducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    user: userReducers,
    cart: cartReducers,
    directory: directoryReducers,
    shop: shopReducers
});

export default persistReducer(persistConfig, rootReducer);
