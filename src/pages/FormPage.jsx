import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, useModal } from "react-modal-jkf";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-modal-jkf/dist/index.css";
import { addEmployee } from "../slices/employeesSlice";
import { updateInputFirstName, updateInputLastName, resetInputs, updateInputDateOfBirth, updateInputStartDate, updateInputDepartment, updateInputAddressStreet, updateInputAddressCity, updateInputAddressZip, updateInputAddressState } from "../slices/formSlice";
import departments from "../data/departments";
import states from "../data/states";

const FormPage = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const { isShowing, toggle } = useModal();
  const [reloadKey, setReloadKey] = useState(0);

  const saveEmployee = () => {
    dispatch(addEmployee(form));
    toggle();
    dispatch(resetInputs());
    setReloadKey((prevKey) => prevKey + 1);
  };

  const handleDateOfBirth = (date) => {
    if (date) {
      console.log(date);
      function isDateValid(date, minYear, maxYear) {
        const year = date.getFullYear();
        return year >= minYear && year <= maxYear;
      }
      const isValid = isDateValid(date, 1900, 2100);
      isValid ? dispatch(updateInputDateOfBirth(date.toISOString())) : alert("La date de naissance est invalide.");
    }
  };

  const handleStartDate = (date) => {
    if (date) {
      console.log(date);
      function isDateValid(date, minYear, maxYear) {
        const year = date.getFullYear();
        return year >= minYear && year <= maxYear;
      }
      const isValid = isDateValid(date, 1900, 2100);
      isValid ? dispatch(updateInputStartDate(date.toISOString())) : alert("La date de démarrage est invalide.");
    }
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={"/employee-list"}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form key={reloadKey} action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" onChange={(e) => dispatch(updateInputFirstName(e.target.value))} value={form.firstName} required />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" onChange={(e) => dispatch(updateInputLastName(e.target.value))} value={form.lastName} required />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker id={"date-of-birth"} selected={new Date(form.dateOfBirth)} onChange={handleDateOfBirth} showMonthDropdown showYearDropdown scrollableYearDropdown required />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker id={"start-date"} selected={new Date(form.startDate)} onChange={handleStartDate} showMonthDropdown showYearDropdown scrollableYearDropdown required />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" onChange={(e) => dispatch(updateInputAddressStreet(e.target.value))} value={form.street} required />

            <label htmlFor="city">City</label>
            <input id="city" type="text" onChange={(e) => dispatch(updateInputAddressCity(e.target.value))} value={form.city} required />

            <label htmlFor="state">State</label>
            <Select
              defaultValue={form.state}
              onChange={(e) => {
                const newState = e;
                dispatch(updateInputAddressState(newState));
              }}
              options={states}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" onChange={(e) => dispatch(updateInputAddressZip(e.target.value))} value={form.zipCode} required />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            defaultValue={form.department}
            onChange={(e) => {
              dispatch(updateInputDepartment(e.label));
            }}
            options={departments}
          />
        </form>
        <button className="save-btn" onClick={saveEmployee}>
          Save
        </button>
      </div>

      <Modal isShowing={isShowing} toggle={toggle} overlayClass={"modal-overlay"} modalClass={"modal"} headerBtnIconClass={"modal-header-btn-icon"} modalHeaderClass={"modal-header"} headerBtnClass={"modal-header-btn"} bodyClass={"modal-body"}>
        <p>Employee created!</p>
      </Modal>
    </div>
  );
};

export default FormPage;