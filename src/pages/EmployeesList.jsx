import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table copy";

import { Link } from "react-router-dom";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees);
  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "stateAbbrev" },
    { title: "Zip Code", data: "zipCode" },
  ];

  // const filters = [
  //   columns.map((column) => {
  //     return {
  //       id: column.data,
  //       value: "",
  //     };
  //   }),
  // ];
  // console.log(filters);
  // const [columnsFilters, setColumnsFilters] = React.useState(filters);
  // columnsFilters={columnsFilters} setColumnsFilters={setColumnsFilters}

  return (
    <div className="table-page">
      <h1>Current Employees</h1>
      <div className="table-container">
        <Table employeesData={employees} columnsData={columns} />
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default EmployeesList;
