import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import { cartReducers } from "./Cart/cartReducers";


const RootReducer = combineReducers({
  auth: AuthReducer, cartReducers
});

export default RootReducer;
