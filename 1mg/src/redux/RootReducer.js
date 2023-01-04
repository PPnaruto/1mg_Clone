import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
});

export default RootReducer;
