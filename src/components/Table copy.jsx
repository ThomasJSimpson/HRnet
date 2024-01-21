import * as React from "react";
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from "@tanstack/react-table";
import isoToDateToStringConverter from "../utils/isoToDateToStringConverter";
import Filters from "./Filters";

function Table({ employeesData, columnsData }) {
  const data = employeesData;
  const columns = columnsData.map((column) => {
    return {
      header: column.title,
      accessorKey: column.data,
      cell: (props) => {
        // console.log(props);
        const columnKey = props.column.columnDef.accessorKey;
        if (columnKey === "dateOfBirth" || columnKey === "startDate") {
          return <p>{isoToDateToStringConverter(props.getValue())}</p>;
        }
        return <p>{props.getValue()}</p>;
      },
    };
  });

  // const ColumnFiltersState = [
  //   columnsData.map((column) => {
  //     console.log(column.data);
  //     const test = { id: column.data, value: "aze" };
  //     console.log(test);
  //     return test;
  //   }),
  // ];
  const ColumnFiltersState = [
    // { id: "firstName", value: "aze" },
    // { id: "lastName", value: "aze" },
    // { id: "startDate", value: "aze" },
    // { id: "department", value: "aze" },
    // { id: "dateOfBirth", value: "aze" },
    // { id: "street", value: "aze" },
    // { id: "city", value: "aze" },
    // { id: "stateAbbrev", value: "aze" },
    // { id: "zipCode", value: "aze" },
  ];
  // const filtersTableState = {
  //   columnFilters: ColumnFiltersState,
  //   globalFilter: null,
  // };

  // console.log(filtersTableState);

  // eslint-disable-next-line no-unused-vars
  const [columnFilters, setColumnFilters] = React.useState([]);

  const table = useReactTable({
    columns,
    data,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  console.log(columnFilters);
  return (
    <>
      <div className="full-table">
        <section className="header-table">
          <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
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
