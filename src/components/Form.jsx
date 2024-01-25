import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../slices/employeesSlice";
import { updateInputFirstName, updateInputLastName, resetInputs, updateInputDateOfBirth, updateInputStartDate, updateInputDepartment, updateInputAddressStreet, updateInputAddressCity, updateInputAddressZip, updateInputAddressState } from "../slices/formSlice";
import departments from "../data/Form/departments";
import states from "../data/Form/states";
import { Modal, useModal } from "react-modal-jkf";
import "react-modal-jkf/dist/index.css";
import isDateValid from "../utils/isDateValid";
import LabelInput from "./LabelInput";
import LabelDatePicker from "./LabelDatePicker";
import LabelSelect from "./LabelSelect";
import Button from "./common/Button";

export default function Form() {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [reloadKey, setReloadKey] = useState(0);
  const { isShowing, openModal, closeModal } = useModal();
  const currentYear = new Date().getFullYear();
  const isValid = (date) => isDateValid(date, 1900, currentYear);

  const handleDateOfBirth = (date) => {
    date && isValid(date) ? dispatch(updateInputDateOfBirth(date.toISOString())) : alert("Date of birth is invalid.");
  };

  const handleStartDate = (date) => {
    date && isValid(date) ? dispatch(updateInputStartDate(date.toISOString())) : alert("Start date is invalid.");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEmployee(form));
    openModal();
    dispatch(resetInputs());
    setReloadKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit} key={reloadKey} id="create-employee">
        <LabelInput labelInputClassName={"label-input"} inputClassName={"form-field"} labelClassName={"form-field-label"} htmlForId={"first-name"} labelChild={"First Name"} type={"text"} onChange={(e) => dispatch(updateInputFirstName(e.target.value))} value={form.firstName} isRequired={true} />

        <LabelInput labelInputClassName={"label-input"} inputClassName={"form-field"} labelClassName={"form-field-label"} htmlForId={"last-name"} labelChild={"Last Name"} type={"text"} onChange={(e) => dispatch(updateInputLastName(e.target.value))} value={form.lastName} isRequired={true} />

        <LabelDatePicker labelDateClassName={"label-datepicker"} labelClassName={"form-field-label"} htmlForId={"date-of-birth"} labelChild={"Date of Birth"} onChange={handleDateOfBirth} selected={form.dateOfBirth ? new Date(form.dateOfBirth) : null} isRequired={true} options={"showMonthDropdown showYearDropdown scrollableYearDropdown"} />

        <LabelDatePicker labelDateClassName={"label-datepicker"} labelClassName={"form-field-label"} htmlForId={"start-date"} labelChild={"Start Date"} onChange={handleStartDate} selected={form.startDate ? new Date(form.startDate) : null} isRequired={true} />

        <fieldset className="address">
          <legend>Address</legend>

          <LabelInput labelInputClassName={"label-input-address"} inputClassName={"form-field-adress"} labelClassName={"form-field-label"} htmlForId={"street"} labelChild={"Street"} type={"text"} onChange={(e) => dispatch(updateInputAddressStreet(e.target.value))} value={form.street} isRequired={true} />

          <LabelInput labelInputClassName={"label-input"} inputClassName={"form-field-adress"} labelClassName={"form-field-label"} htmlForId={"city"} labelChild={"City"} type={"text"} onChange={(e) => dispatch(updateInputAddressCity(e.target.value))} value={form.city} isRequired={true} />

          <LabelSelect
            labelSelectClassName={"label-select"}
            labelClassName={"form-field-label"}
            htmlForId={"state"}
            labelChild={"State"}
            onChange={(e) => {
              dispatch(updateInputAddressState(e));
            }}
            defaultValue={form.zipCode}
            options={states}
          />

          <LabelInput labelInputClassName={"label-input"} inputClassName={"form-field"} labelClassName={"form-field-label"} htmlForId={"zip-code"} labelChild={"Zip code"} type={"number"} onChange={(e) => dispatch(updateInputAddressZip(e.target.value))} value={form.zipCode} isRequired={true} />
        </fieldset>

        <LabelSelect
          labelSelectClassName={"label-select"}
          labelClassName={"form-field-label"}
          htmlForId={"department"}
          labelChild={"Department"}
          onChange={(e) => {
            dispatch(updateInputDepartment(e.label));
          }}
          defaultValue={form.department}
          options={departments}
        />
        <Button className={"submit-button"} type={"submit"}>
          Add employee
        </Button>
      </form>
      <Modal isShowing={isShowing} closeModal={closeModal} overlayClass={"modal-overlay"} modalClass={"modal"} btnClass={"modal-btn"} bodyClass={"modal-body"}>
        <p>Employee created!</p>
      </Modal>
    </>
  );
}
