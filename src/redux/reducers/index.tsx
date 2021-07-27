import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducers from "./cartReducers";

const reducers = combineReducers({
  allproducts: productReducer,
  cart: cartReducers,
});
export default reducers;
