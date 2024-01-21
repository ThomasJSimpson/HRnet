import * as React from "react";
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from "@tanstack/react-table";
import Filters from "./Filters";

function Table({ employeesData, columns }) {
  const data = employeesData;

  const [filtering, setFiltering] = React.useState("");

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  console.log("rendu avant le return Table ");

  return (
    <>
      <div className="full-table">
        <section className="header-table">
          {/* <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} /> */}
          <Filters filtering={filtering} setFiltering={setFiltering} />
        </section>
        <table className="body-table" w={table.getTotalSize()}>
          <thead>
            {table.getHeaderGroups().map((headergroup) => (
              <tr key={headergroup.id}>
                {headergroup.headers.map((header) => (
                  <th w={header.getSize()} key={header.id}>
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

                    return (
                      <td w={cell.column.getSize()} key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
