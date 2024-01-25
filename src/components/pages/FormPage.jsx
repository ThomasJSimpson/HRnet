import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form";

const FormPage = () => {
  return (
    <div className="form-page">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="form-container">
        <Link to={"/employee-list"} className="employee-list-link">
          View Current Employees
        </Link>
        <h2 className="form-title">Create Employee</h2>
        <Form />
      </div>
    </div>
  );
};

export default FormPage;
