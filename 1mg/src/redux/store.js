import { legacy_createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export default store;
