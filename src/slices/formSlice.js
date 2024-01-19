import { createSlice } from "@reduxjs/toolkit";
import dateIsoConverter from "../utils/dateIsoConverterUtils";

const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: {
    date: new Date().toISOString(),
    formattedDate: dateIsoConverter(new Date().toISOString()),
  },
  startDate: {
    date: new Date().toISOString(),
    formattedDate: dateIsoConverter(new Date().toISOString()),
  },
  department: null,
  street: "",
  city: "",
  state: null,
  zipCode: "",
};

export const formInputSlice = createSlice({
  name: "form",

  initialState,

  reducers: {
    updateInputFirstName: (state, action) => {
      state.firstName = action.payload;
    },

    updateInputLastName: (state, action) => {
      state.lastName = action.payload;
    },

    updateInputDateOfBirth: (state, action) => {
      state.dateOfBirth.date = action.payload;
      state.dateOfBirth.formattedDate = dateIsoConverter(action.payload);
    },

    updateInputStartDate: (state, action) => {
      state.startDate.date = action.payload;
      state.startDate.formattedDate = dateIsoConverter(action.payload);
    },

    updateInputDepartment: (state, action) => {
      state.department = action.payload;
    },

    updateInputAddressStreet: (state, action) => {
      state.street = action.payload;
    },

    updateInputAddressCity: (state, action) => {
      state.city = action.payload;
    },

    updateInputAddressState: (state, action) => {
      state.state = action.payload;
    },

    updateInputAddressZip: (state, action) => {
      state.zipCode = action.payload;
    },

    resetInputs: (state, action) => {
      return initialState;
    },
  },
});

export const { updateInputFirstName, updateInputLastName, resetInputs, updateInputDateOfBirth, updateInputStartDate, updateInputDepartment, updateInputAddressStreet, updateInputAddressCity, updateInputAddressState, updateInputAddressZip } = formInputSlice.actions;

export default formInputSlice.reducer;
