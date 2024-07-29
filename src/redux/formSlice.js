// redux/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  gender: "",
  nationality: "",
  number: "",
  dob: null,
  arrival: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setFormData, setField } = formSlice.actions;
export default formSlice.reducer;
