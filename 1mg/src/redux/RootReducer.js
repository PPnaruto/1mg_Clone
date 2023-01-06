import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import ProductReducer from "./Product/ProductReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  products: ProductReducer,
});

export default RootReducer;
