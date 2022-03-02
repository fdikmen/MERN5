import { combineReducers } from "redux";
import myReducer from "./myReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";


export default combineReducers(
    { userReducer, productReducer, myReducer });