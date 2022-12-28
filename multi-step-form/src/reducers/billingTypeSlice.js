import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "monthly",
};

export const billingTypeSlice = createSlice({
  name: "billingType",
  initialState: initialState,
  reducers: {
    saveBillingType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectBillingType = (state) => state.billingType.value;
export const { saveBillingType } = billingTypeSlice.actions;
export default billingTypeSlice.reducer;
