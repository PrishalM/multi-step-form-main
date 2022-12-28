import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onlineService: false,
  largerStorage: false,
  customisableProfile: false,
};

export const addOnsSlice = createSlice({
  name: "addOns",
  initialState: initialState,
  reducers: {
    saveOS: (state, action) => {
      state.onlineService = action.payload;
    },
    saveLS: (state, action) => {
      state.largerStorage = action.payload;
    },
    saveCP: (state, action) => {
      state.customisableProfile = action.payload;
    },
  },
});

export const selectOnlineService = (state) => state.addOns.onlineService;
export const selectLargerStorage = (state) => state.addOns.largerStorage;
export const selectCustomisableProfile = (state) =>
  state.addOns.customisableProfile;
export const { saveOS, saveLS, saveCP } = addOnsSlice.actions;
export default addOnsSlice.reducer;
