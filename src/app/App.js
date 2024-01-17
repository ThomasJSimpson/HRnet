import Form from "../pages/Form.jsx";
import EmployeesList from "../pages/EmployeesList.jsx";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/employee-list" element={<EmployeesList />} />
    </Routes>
  );
}

export default App;
