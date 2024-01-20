import * as React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

function Table({ dataEmployees }) {
  const data = dataEmployees.data;
  const columns = dataEmployees.columns;
  const options = { columns, data, getCoreRowModel: getCoreRowModel() };
  const table = useReactTable(options);

  return (
    <table className="test">
      <thead>
        {table.getHeaderGroups().map((headergroup) => (
          <tr key={headergroup.id}>
            {headergroup.headers.map((header) => (
              <th className="test" key={header.id}>
                {header.column.columnDef.header}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          // console.log(row.getVisibleCells());
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                // console.log(cell);
                // const columnKey = cell.column.id;
                // console.log("Column Key:", columnKey);
                // console.log("Cell Value:", cell.row.original[columnKey]);
                // console.log(cell.getContext());

                return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
