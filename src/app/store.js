import { configureStore } from "@reduxjs/toolkit";

import formReducer from "../slices/formSlice.js";
import employeesReducer from "../slices/employeesSlice.js";

export const store = configureStore({
  reducer: {
    form: formReducer,
    employees: employeesReducer,
  },
});
