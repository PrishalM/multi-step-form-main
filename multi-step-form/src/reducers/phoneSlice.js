import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState: initialState,
  reducers: {
    savePhone: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectPhone = (state) => state.phone.value;
export const { savePhone } = phoneSlice.actions;
export default phoneSlice.reducer;
