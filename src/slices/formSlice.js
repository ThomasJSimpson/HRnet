import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  birthDate: "",
  startDate: "",
  department: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  isModalOpen: false,
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
    updateInputBirthDate: (state, action) => {
      state.birthDate = action.payload;
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
      state.state = action.payload;
    },
    updateInputAddressZip: (state, action) => {
      state.zipCode = action.payload;
    },
    updateIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    resetInputs: (state, action) => {
      return initialState;
    },
  },
});

export const { updateInputFirstName, updateInputLastName, resetInputs, updateInputBirthDate, updateInputStartDate, updateInputDepartment, updateInputAddressStreet, updateInputAddressCity, updateInputAddressState, updateInputAddressZip, updateIsModalOpen } = formInputSlice.actions;
export default formInputSlice.reducer;
