import { createSlice } from "@reduxjs/toolkit";
import mockedData from "../data/Table/mockedData.js";

const initialState = JSON.parse(localStorage.getItem("employees")) || mockedData;
export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state));
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
