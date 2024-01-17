import { createSlice } from "@reduxjs/toolkit";
const sampleEmployees = [
  { firstName: "Thomas", lastName: "Berenger", birthDate: "18/07/1988", startDate: "18/07/1988", department: "department1", street: "street1", city: "city1", state: "state1", zipCode: "34090", isModalOpen: false },
  { firstName: "Jeremy", lastName: "Ferrari", birthDate: "18/07/1989", startDate: "18/07/1989", department: "department2", street: "street2", city: "city2", state: "state2", zipCode: "35090", isModalOpen: false },
  { firstName: "Patrick", lastName: "Duffy", birthDate: "18/07/1990", startDate: "18/07/1990", department: "department3", street: "street3", city: "city3", state: "state3", zipCode: "36090", isModalOpen: false },
];
const initialState = JSON.parse(localStorage.getItem("employees")) || sampleEmployees;

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
