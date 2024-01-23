import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  startDate: null,
  department: null,
  street: "",
  city: "",
  state: null,
  stateAbbrev: null,
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
      state.dateOfBirth = action.payload;
    },

    updateInputStartDate: (state, action) => {
      state.startDate = action.payload;
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
      state.stateAbbrev = action.payload.abbreviation;
      state.state = action.payload.label;
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
