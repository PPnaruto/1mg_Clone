import { legacy_createStore } from "redux";
import RootReducer from "./RootReducer";

const store = legacy_createStore(RootReducer);

export default store;
