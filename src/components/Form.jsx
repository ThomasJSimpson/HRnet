import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../slices/employeesSlice";
import { updateInputFirstName, updateInputLastName, resetInputs, updateInputDateOfBirth, updateInputStartDate, updateInputDepartment, updateInputAddressStreet, updateInputAddressCity, updateInputAddressZip, updateInputAddressState } from "../slices/formSlice";
import departments from "../data/departments";
import states from "../data/states";
import { Modal, useModal } from "react-modal-jkf";
import "react-modal-jkf/dist/index.css";
import isDateValid from "../utils/isDateValid";
import LabelInput from "./common/LabelInput";
import LabelDatePicker from "./common/LabelDatePicker";
import LabelSelect from "./common/LabelSelect";

export default function Form() {
  const [reloadKey, setReloadKey] = useState(0);
  const form = useSelector((state) => state.form);
  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();

  const handleDateOfBirth = (date) => {
    if (date) {
      const isValid = isDateValid(date, 1900, 2100);
      isValid ? dispatch(updateInputDateOfBirth(date.toISOString())) : alert("Date of birth is invalid.");
    }
  };

  const handleStartDate = (date) => {
    if (date) {
      const isValid = isDateValid(date, 1900, 2100);
      isValid ? dispatch(updateInputStartDate(date.toISOString())) : alert("Start date is invalid.");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEmployee(form));
    toggle();
    dispatch(resetInputs());
    setReloadKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <form onSubmit={handleSubmit} key={reloadKey} id="create-employee">
        <LabelInput htmlForId={"first-name"} labelChild={"First Name"} type={"text"} onChange={(e) => dispatch(updateInputFirstName(e.target.value))} value={form.firstName} isRequired={true} />

        <LabelInput htmlForId={"last-name"} labelChild={"Last Name"} type={"text"} onChange={(e) => dispatch(updateInputLastName(e.target.value))} value={form.lastName} isRequired={true} />

        <LabelDatePicker htmlForId={"date-of-birth"} labelChild={"Date of Birth"} onChange={handleDateOfBirth} selected={new Date(form.dateOfBirth)} isRequired={true} />

        <LabelDatePicker htmlForId={"start-date"} labelChild={"Start Date"} onChange={handleStartDate} selected={new Date(form.startDate)} isRequired={true} />

        <fieldset className="address">
          <legend>Address</legend>

          <LabelInput htmlForId={"street"} labelChild={"Street"} type={"text"} onChange={(e) => dispatch(updateInputAddressStreet(e.target.value))} value={form.street} isRequired={true} />

          <LabelInput htmlForId={"city"} labelChild={"City"} type={"text"} onChange={(e) => dispatch(updateInputAddressCity(e.target.value))} value={form.city} isRequired={true} />

          <LabelSelect
            htmlForId={"state"}
            labelChild={"State"}
            onChange={(e) => {
              dispatch(updateInputAddressState(e));
            }}
            defaultValue={form.zipCode}
            options={states}
          />

          <LabelInput htmlForId={"zip-code"} labelChild={"Zip code"} type={"number"} onChange={(e) => dispatch(updateInputAddressZip(e.target.value))} value={form.zipCode} isRequired={true} />
        </fieldset>

        <LabelSelect
          htmlForId={"department"}
          labelChild={"Department"}
          onChange={(e) => {
            dispatch(updateInputDepartment(e.label));
          }}
          defaultValue={form.department}
          options={departments}
        />

        <button className="save-btn" type="submit">
          Save
        </button>
      </form>

      <Modal isShowing={isShowing} toggle={toggle} overlayClass={"modal-overlay"} modalClass={"modal"} headerBtnIconClass={"modal-header-btn-icon"} modalHeaderClass={"modal-header"} headerBtnClass={"modal-header-btn"} bodyClass={"modal-body"}>
        <p>Employee created!</p>
      </Modal>
    </>
  );
}
