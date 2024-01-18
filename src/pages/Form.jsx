import React from "react";
import { addEmployee } from "../slices/employeesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateInputFirstName, updateInputLastName, resetInputs, updateInputBirthDate, updateInputStartDate, updateInputDepartment, updateInputAddressStreet, updateInputAddressCity, updateInputAddressZip, updateIsModalOpen } from "../slices/formSlice";
// updateInputAddressState
import DatePickerCustom from "../components/DatePicker";
import { Modal } from "../components/Modal/Modal";
import useModal from "../components/Modal/useModal";

const Form = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const { isShowing, toggle } = useModal();

  const saveEmployee = () => {
    const dataEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    dataEmployees.push(form);
    localStorage.setItem("employees", JSON.stringify(dataEmployees));
    dispatch(addEmployee(form));
    toggle();
  };
  const handleModal = () => {
    dispatch(updateIsModalOpen(false));
    dispatch(resetInputs());
  };
  // console.log(form.isModalOpen);
  // console.log(form.date);
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
        {/* <Modal text={"LETS GOOOOWWW"} /> */}
      </div>
      <div className="container">
        <Link to={"/employee-list"}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" onChange={(e) => dispatch(updateInputFirstName(e.target.value))} value={form.firstName} required />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" onChange={(e) => dispatch(updateInputLastName(e.target.value))} value={form.lastName} required />

          <label htmlFor="date-of-birth">Date of Birth</label>
          {/* <input type="text" onChange={(e) => dispatch(updateInputBirthDate(e.target.value))} value={form.birthDate} required /> */}

          <DatePickerCustom id={"date-of-birth"} date={form.birthDate} updateInputDate={updateInputBirthDate} />
          <label htmlFor="start-date">Start Date</label>
          {/* <input id="start-date" type="text" onChange={(e) => dispatch(updateInputStartDate(e.target.value))} value={form.startDate} required /> */}
          <DatePickerCustom id={"start-date"} date={form.startDate} updateInputDate={updateInputStartDate} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" onChange={(e) => dispatch(updateInputAddressStreet(e.target.value))} value={form.street} required />

            <label htmlFor="city">City</label>
            <input id="city" type="text" onChange={(e) => dispatch(updateInputAddressCity(e.target.value))} value={form.city} required />

            {/* <label htmlFor="state">State</label>
            <select name="state" id="state"></select> */}

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" onChange={(e) => dispatch(updateInputAddressZip(e.target.value))} value={form.zipCode} required />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department" onChange={(e) => dispatch(updateInputDepartment(e.target.value))} value={form.department} required>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
        <button onClick={saveEmployee}>Save</button>
      </div>
      {/* <div>
        <button onClick={toggle}>Open Modal</button>
        <Modal element={<MyComponentContent />} isShowing={isShowing} toggle={toggle} />
      </div> */}
      {/* <Modal isModalOpen={form.isModalOpen} handleModal={handleModal}>
        <p>Modal Content</p>
      </Modal> */}

      <Modal isShowing={isShowing} toggle={toggle} overlayClass={"modal-overlay"} modalClass={"modal"} headerBtnIconClass={"modal-header-btn-icon"} modalHeaderClass={"modal-header"} headerBtnClass={"modal-header-btn"} bodyClass={"modal-body"}>
        {/* <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p> */}
        <p>Employee created!</p>
      </Modal>
    </>
  );
};

export default Form;
