import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import isoToDateToStringConverter from "../utils/isoToDateToStringConverter";
const EmployeePage = () => {
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

  const columnsData = columns.map((column) => {
    return {
      header: column.title,
      accessorKey: column.data,
      cell: (props) => {
        const columnKey = props.column.columnDef.accessorKey;
        if (columnKey === "dateOfBirth" || columnKey === "startDate") {
          return <p>{isoToDateToStringConverter(props.row.original[columnKey])}</p>;
        }
        return <p>{props.getValue()}</p>;
      },
    };
  });
  console.log("rendu dans EmployeePage");

  return (
    <div className="table-page">
      <h1>Current Employees</h1>
      <div className="table-container">
        <Table employeesData={employees} columns={columnsData} />
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default EmployeePage;
