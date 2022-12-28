import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./reducers/nameSlice";
import emailReducer from "./reducers/emailSlice";
import phoneReducer from "./reducers/phoneSlice";
import billingOptionReducer from "./reducers/billingOptionSlice";
import billingTypeReducer from "./reducers/billingTypeSlice";
import addOnsReducer from "./reducers/addOnsSlice";

export const store = configureStore({
  reducer: {
    name: nameReducer,
    email: emailReducer,
    phone: phoneReducer,
    billingOption: billingOptionReducer,
    billingType: billingTypeReducer,
    addOns: addOnsReducer,
  },
});
