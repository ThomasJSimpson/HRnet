import { useSelector } from "react-redux";
import Table from "../Table";
import { Link } from "react-router-dom";
import columnsData from "../../data/Table/columnsData";

const EmployeePage = () => {
  const employees = useSelector((state) => state.employees);

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
