import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
  name: "submit",
  initialState: {
    formData: {
      firstname: "",
      lastname: "",
      gender: "",
      number: "",
      dob: null,
      arrival: null,
      nationality: "",
    },
  },
  reducers: {
    formSubmit: (state, action) => {
      return {
        ...state,
        formData: action.payload,
      };
    },
  },
});

export const { formSubmit } = submitSlice.actions;

export default submitSlice.reducer;
