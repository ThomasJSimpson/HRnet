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
// {
//   "src": "favicon.ico",
//   "sizes": "64x64 32x32 24x24 16x16",
//   "type": "image/x-icon"
// },
// {
//   "src": "logo192.png",
//   "type": "image/png",
//   "sizes": "192x192"
// },
// {
//   "src": "logo512.png",
//   "type": "image/png",
//   "sizes": "512x512"
// }
