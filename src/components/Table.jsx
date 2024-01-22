import * as React from "react";
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getSortedRowModel, getPaginationRowModel } from "@tanstack/react-table";
import Filter from "./Filter";
import EntriesNumberSetter from "./EntriesNumberSetter";
function Table({ employeesData, columns }) {
  const data = employeesData;

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const tableConfig = React.useMemo(
    () => ({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      state: {
        globalFilter,
        pagination,
      },
      onGlobalFilterChange: setGlobalFilter,
      onPaginationChange: setPagination,
    }),
    [columns, data, globalFilter, pagination]
  );

  const table = useReactTable(tableConfig);
  console.log("rendu avant le return Table ");

  return (
    <>
      <div className="full-table">
        <section className="header-table">
          <EntriesNumberSetter pageSize={pagination.pageSize} setPageSize={table.setPageSize}></EntriesNumberSetter>
          <Filter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        </section>
        <table className="body-table" w={table.getTotalSize()}>
          <thead>
            {table.getHeaderGroups().map((headergroup) => (
              <tr key={headergroup.id}>
                {headergroup.headers.map((header) => (
                  <th w={header.getSize()} key={header.id}>
                    <div className="header-table-cell">
                      {header.column.columnDef.header}
                      {header.column.getCanSort() && (
                        <div className="header-table-cell-icon" onClick={header.column.getToggleSortingHandler()}>
                          {header.column.getIsSorted() ? (
                            <span>{header.column.getIsSorted() === "asc" ? <span>&uarr;</span> : <span>&darr;</span>}</span>
                          ) : (
                            <span>
                              &darr; <span>&uarr;</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
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
        <div className="pagination">
          <p>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </p>
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            {"<"}
          </button>
          {Array.from({ length: table.getPageCount() }, (_, i) => (
            <button key={i} onClick={() => table.setPageIndex(i)} disabled={table.getState().pagination.pageIndex === i}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            {">"}
          </button>
        </div>
        <div className="entries-info">
          <p>
            Showing {table.getRowModel().rows.length} of {table.getFilteredRowModel().rows.length} entries
          </p>
        </div>
      </div>
    </>
  );
}

export default Table;
