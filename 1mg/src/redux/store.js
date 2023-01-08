import { legacy_createStore } from "redux";
import RootReducer from "./RootReducer";
import INIT_STATE from "./Cart/initialstate";

// update the initial state with the current state of local storage
const storedCart = JSON.parse(localStorage.getItem('Cartdata'));
if (storedCart) {
  INIT_STATE.carts = storedCart;
}
console.log(storedCart);

const store = legacy_createStore(RootReducer,INIT_STATE);

export default store;
