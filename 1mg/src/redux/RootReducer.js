import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import ProductReducer from "./Product/ProductReducer";
import UtilReducer from "./Utils/UtilReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  products: ProductReducer,
  utils: UtilReducer,
});

export default RootReducer;
