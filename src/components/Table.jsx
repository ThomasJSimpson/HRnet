import useConfigTable from "../data/Table/useConfigTable";
import Filter from "./Filter";
import EntriesNumberSetter from "./EntriesNumberSetter";
import Pagination from "./Pagination";
import EntriesInfos from "./EntriesInfos";
import THeadContent from "./THeadContent";
import TBodyContent from "./TBodyContent";

function Table({ employeesData, columns }) {
  const { table, globalFilter, setGlobalFilter, flexRender } = useConfigTable(columns, employeesData);

  return (
    <div className="full-table">
      <section className="header-table-page">
        <EntriesNumberSetter table={table} />
        <Filter htmlFor={""} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      </section>

      <table className="styled-table" w={table.getTotalSize()}>
        <thead>
          <THeadContent table={table} />
        </thead>
        <tbody>
          <TBodyContent table={table} flexRender={flexRender} />
        </tbody>
      </table>

      <section>
        <Pagination table={table} />
        <EntriesInfos table={table} />
      </section>
    </div>
  );
}

export default Table;
