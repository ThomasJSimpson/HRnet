import useConfigTable from "../data/Table/useConfigTable";
import Filter from "./Filter";
import EntriesNumberSetter from "./EntriesNumberSetter";
import Pagination from "./Pagination";
import EntriesInfos from "./EntriesInfos";

function Table({ employeesData, columns }) {
  const { table, pagination, globalFilter, setGlobalFilter, flexRender } = useConfigTable(columns, employeesData);

  return (
    <>
      <div className="full-table">
        <section className="header-table">
          <EntriesNumberSetter table={table} pageSize={pagination.pageSize} setPageSize={table.setPageSize} />
          <Filter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
        </section>
        <table className="styled-table" w={table.getTotalSize()}>
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
                              &uarr; <span>&darr;</span>
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
        <Pagination table={table} />
        <EntriesInfos table={table} />
      </div>
    </>
  );
}

export default Table;
