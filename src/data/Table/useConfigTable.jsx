import * as React from "react";
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";

const useConfigTable = (columns, data) => {
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

  return { table, pagination, globalFilter, setGlobalFilter, flexRender };
};

export default useConfigTable;
