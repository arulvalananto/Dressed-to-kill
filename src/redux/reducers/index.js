import { combineReducers } from "redux";

import cartReducers from "./cartReducers";
import userReducers from "./userReducers";

export default combineReducers({
    user: userReducers,
    cart: cartReducers,
});
