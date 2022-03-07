import { combineReducers } from "redux";
import myReducer from "./myReducer";
import postsReducer from "./postsReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";


export default combineReducers(
    { userReducer, productReducer, myReducer,postsReducer });