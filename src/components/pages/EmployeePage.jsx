import { useSelector } from "react-redux";
import Table from "../Table";
import { Link } from "react-router-dom";
import columnsData from "../../data/Table/columnsData";

const EmployeePage = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <div className="table-page">
      <h1>Current Employees</h1>
      <div className="table-container">
        <Table employeesData={employees} columns={columnsData} />
        <div className="table-page-link-container">
          <Link to={"/"} className="table-page-link">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
