import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import Addtocart_reducer from "./Cart/AddtoCart_reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  cart: Addtocart_reducer,
});

export default RootReducer;
