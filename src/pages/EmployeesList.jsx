import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/Table copy";
import isoToDateToStringConverter from "../utils/isoToDateToStringConverter";
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

  const data = {
    data: employees,
    columns: columns.map((column) => {
      return {
        header: column.title,
        accessor: column.data,
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          if (columnKey === "dateOfBirth" || columnKey === "startDate") {
            return <p>{isoToDateToStringConverter(props.row.original[columnKey])}</p>;
          }
          return <p>{props.row.original[columnKey]}</p>;
          // <p>{props.getValue()}</p>;
        },
      };
    }),
  };

  return (
    <>
      <h1>Current Employees</h1>
      <div className="table-container">
        <Table dataEmployees={data} />
        <Link to={"/"}>Home</Link>
      </div>
    </>
  );
};

export default EmployeesList;
