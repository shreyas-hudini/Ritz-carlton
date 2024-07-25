import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/submitSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
