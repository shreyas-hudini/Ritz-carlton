import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./Submit_reducer";

const rootReducer = combineReducers({
    form:formReducer,
})

export default rootReducer