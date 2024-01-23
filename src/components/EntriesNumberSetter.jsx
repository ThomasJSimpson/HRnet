import React from "react";

const EntriesNumberSetter = ({ table }) => {
  const maxRowsFilteredDecimal = table.getFilteredRowModel().rows.length === 0 ? 1 : table.getFilteredRowModel().rows.length / 10;
  const optionsChoicesNumber = Math.ceil(maxRowsFilteredDecimal);

  return (
    <div>
      <label htmlFor="pageSize">Page Size:</label>
      <select id="pageSize" value={table.getState().pagination.pageSize} onChange={(e) => table.setPageSize(e.target.value)}>
        {[...Array(optionsChoicesNumber)].map((_, index) => (
          <option key={index} value={(index + 1) * 10}>
            {(index + 1) * 10}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EntriesNumberSetter;
