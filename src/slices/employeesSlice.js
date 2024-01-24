import { createSlice } from "@reduxjs/toolkit";
import createRandomEmployee from "../utils/createRandomEmployee";

const mockedEmployees = [
  // {
  //   firstName: "Thomas",
  //   lastName: "Berenger",
  //   dateOfBirth: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   startDate: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   department: "department1",
  //   street: "street1",
  //   city: "city1",
  //   state: "state1",
  //   zipCode: "34090",
  // },
  // {
  //   firstName: "Jeremy",
  //   lastName: "Ferrari",
  //   dateOfBirth: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   startDate: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   department: "department2",
  //   street: "street2",
  //   city: "city2",
  //   state: "state2",
  //   zipCode: "35090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   startDate: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   department: "department3",
  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   startDate: {
  //     date: new Date().toISOString(),
  //     formattedDate: "01/24/2024",
  //   },
  //   department: "department3",
  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  {
    firstName: "Patrick",
    lastName: "Duffy",
    dateOfBirthObj: new Date().toISOString(),
    dateOfBirthFormat: "01/24/2024",
    startDateObj: new Date().toISOString(),
    startDateFormat: "01/24/2024",

    department: "department3",
    street: "street3",
    city: "city3",
    state: "state3",
    zipCode: "36090",
  },
  {
    firstName: "Patrick",
    lastName: "Duffy",
    dateOfBirthObj: new Date().toISOString(),
    dateOfBirthFormat: "01/24/2024",
    startDateObj: new Date().toISOString(),
    startDateFormat: "01/24/2024",

    department: "department3",
    street: "street3",
    city: "city3",
    state: "state3",
    zipCode: "36090",
  },
  {
    firstName: "Patrick",
    lastName: "Duffy",
    dateOfBirthObj: new Date().toISOString(),
    dateOfBirthFormat: "01/24/2024",
    startDateObj: new Date().toISOString(),
    startDateFormat: "01/24/2024",

    department: "department3",
    street: "street3",
    city: "city3",
    state: "state3",
    zipCode: "36090",
  },
  {
    firstName: "Patrick",
    lastName: "Duffy",
    dateOfBirthObj: new Date().toISOString(),
    dateOfBirthFormat: "01/24/2024",
    startDateObj: new Date().toISOString(),
    startDateFormat: "01/24/2024",

    department: "department3",
    street: "street3",
    city: "city3",
    state: "state3",
    zipCode: "36090",
  },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",
  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },

  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",
  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },

  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",

  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
  // {
  //   firstName: "Patrick",
  //   lastName: "Duffy",
  //   dateOfBirth: new Date().toISOString(),
  //   startDate: new Date().toISOString(),
  //   department: "department3",
  //   stateAbbrev: "MK",
  //   street: "street3",
  //   city: "city3",
  //   state: "state3",
  //   zipCode: "36090",
  // },
];

// const initialState = JSON.parse(localStorage.getItem("employees")) || mockedEmployees;

let employees = [];
for (let i = 0; i < 500; i++) {
  employees.push(createRandomEmployee());
}

const initialState = JSON.parse(localStorage.getItem("employees")) || employees;
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
