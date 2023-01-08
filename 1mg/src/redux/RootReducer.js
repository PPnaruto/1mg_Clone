import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import Addtocart_reducer from "./Cart/AddtoCart_reducer";
import ProductReducer from "./Product/ProductReducer";
import UtilReducer from "./Utils/UtilReducer";
import { cartReducers } from "./Cart/cartReducers";

const RootReducer = combineReducers({
  auth: AuthReducer,
  cart: Addtocart_reducer,
  utils: UtilReducer,
  products: ProductReducer,
  checkout: cartReducers
 
});

export default RootReducer;
