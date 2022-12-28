import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const billingOptionSlice = createSlice({
  name: "billingOption",
  initialState: initialState,
  reducers: {
    saveBillingOption: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectBillingOption = (state) => state.billingOption.value;
export const { saveBillingOption } = billingOptionSlice.actions;
export default billingOptionSlice.reducer;
