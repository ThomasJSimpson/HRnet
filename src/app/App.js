import FormPage from "../components/pages/FormPage.jsx";
import EmployeePage from "../components/pages/EmployeePage.jsx";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/employee-list" element={<EmployeePage />} />
    </Routes>
  );
}

export default App;
