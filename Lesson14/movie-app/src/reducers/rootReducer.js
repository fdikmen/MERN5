import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import newMovieReducer from "./newMovieReducer";


export default combineReducers({movieReducer,newMovieReducer})