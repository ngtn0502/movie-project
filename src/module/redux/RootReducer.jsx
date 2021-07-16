import { combineReducers } from "redux";
import { mainReducer } from "./MainReducer.jsx";
import { MovieReducer } from "./MovieReducer.jsx";

// rootReducer where combine all child reducer
export const rootReducer = combineReducers({
    mainReducer: mainReducer,
    movie: MovieReducer,
})