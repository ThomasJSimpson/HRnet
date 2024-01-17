import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import Table from "../components/Table";
import Table from "../components/Table copy";

import { Link } from "react-router-dom";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees);

  const data = {
    data: employees,
    columns: [
      // { title: "First Name", data: "firstName" },
      // { title: "Last Name", data: "lastName" },
      // { title: "Start Date", data: "startDate" },
      // { title: "Department", data: "department" },
      // { title: "Date of Birth", data: "birthDate" },
      // { title: "Street", data: "street" },
      // { title: "City", data: "city" },
      // { title: "State", data: "state" },
      // { title: "Zip Code", data: "zip" },
      {
        header: "First Name",
        accessor: "firstName",
        cell: (props) => {
          // console.log(props);
          const columnKey = props.column.columnDef.accessor;
          console.log("Column Key:", columnKey);
          console.log("Cell Value:", props.row.original[columnKey]);
          // // const test2 = props.getValue();
          // // console.log(test2);
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      // Colonne d'accessoire (Nom de famille)
      {
        header: "Last Name",
        accessor: "lastName",
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      // Colonne d'accessoire (Âge)
      {
        header: "Start Date",
        accessor: "startDate",
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      {
        header: "Department",
        accessor: "department",
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      {
        header: "Date of Birth",
        accessor: "birthDate",
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      {
        header: "Street",
        accessor: "street",
        cell: (props) => {
          console.log(props);

          const columnKey = props.column.columnDef.accessor;

          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      {
        header: "City",
        accessor: "city",
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      {
        header: "State",
        accessor: "state",
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          console.log("Column Key:", columnKey);
          console.log("Cell Value:", props.row.original[columnKey]);
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
      {
        header: "Zip Code",
        accessor: "zipCode",
        cell: (props) => {
          const columnKey = props.column.columnDef.accessor;
          return <p>{props.row.original[columnKey]}</p>;
        },
      },
    ],
  };
  return (
    <>
      <Table dataEmployees={data} />
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default EmployeesList;
// return (
//   <table>
//     <thead>
//       {/* {table.getHeaderGroups().map((headerGroup) => (
//         <tr key={headerGroup.id}>
//           {headerGroup.headers.map((header) => (
//             <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
//           ))}
//         </tr>
//       ))} */}
//       <tr>
//         <th>essai TH</th>
//         <th>essai TH</th>
//         <th>essai TH</th>
//         <th>essai TH</th>
//         <th>essai TH</th>
//         <th>essai TH</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* {table.getRowModel().rows.map((row) => (
//         <tr key={row.id}>
//           {row.getVisibleCells().map((cell) => (
//             <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
//           ))}
//         </tr>
//       ))} */}
//       <tr>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//       </tr>
//       <tr>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//       </tr>
//       <tr>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//       </tr>
//       <tr>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//       </tr>
//       <tr>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//       </tr>
//       <tr>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//         <td>la</td>
//       </tr>
//     </tbody>
//   </table>
// );
