import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees);
  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDateFormat" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirthFormat" },
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
          console.log(props.row.original[columnKey].formattedDate);
          return <p>{props.row.original[columnKey].formattedDate}</p>;
        }
        return <p>{props.getValue()}</p>;
      },
    };
  });
  console.log("rendu dans EmployeesList");

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

export default EmployeesList;
