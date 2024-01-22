import { createSlice } from "@reduxjs/toolkit";

function getRandomDate(start, end) {
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split("T")[0]; // Format YYYY-MM-DD
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const firstNames = ["John", "Jane", "Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Harry"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
const departments = ["HR", "IT", "Finance", "Marketing", "Sales", "Logistics", "R&D", "Customer Service", "Legal", "Operations"];
const states = ["California", "New York", "Texas", "Florida", "Pennsylvania", "Illinois", "Ohio", "Georgia", "North Carolina", "Michigan"];

function createRandomEmployee() {
  let firstName = getRandomElement(firstNames);
  let lastName = getRandomElement(lastNames);
  let department = getRandomElement(departments);
  let state = getRandomElement(states);
  let stateAbbrev = state.substring(0, 2).toUpperCase();

  let dateOfBirth = getRandomDate(new Date(1970, 0, 1), new Date(2000, 0, 1));
  let startDate = getRandomDate(new Date(2010, 0, 1), new Date(2022, 0, 1));

  // Assurez-vous que startDate est après dateOfBirth
  while (new Date(startDate) < new Date(dateOfBirth)) {
    startDate = getRandomDate(new Date(2010, 0, 1), new Date(2022, 0, 1));
  }

  return {
    firstName,
    lastName,
    dateOfBirth: new Date(dateOfBirth).toISOString(),
    startDate: new Date(startDate).toISOString(),
    department,
    street: `Street ${Math.floor(Math.random() * 100)}`,
    city: `City ${Math.floor(Math.random() * 100)}`,
    state,
    stateAbbrev,
    zipCode: `${Math.floor(10000 + Math.random() * 90000)}`,
  };
}

let employees = [];
for (let i = 0; i < 50; i++) {
  employees.push(createRandomEmployee());
}

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
