import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {
    saveEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectEmail = (state) => state.email.value;
export const { saveEmail } = emailSlice.actions;
export default emailSlice.reducer;
