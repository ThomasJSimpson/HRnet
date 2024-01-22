import React from "react";

const EntriesNumberSetter = ({ table }) => {
  return (
    <div>
      <label htmlFor="pageSize">Page Size:</label>
      <select id="pageSize" value={table.getState().pagination.pageSize} onChange={(e) => table.setPageSize(e.target.value)}>
        {[...Array(10)].map((_, index) => (
          <option key={index} value={(index + 1) * 10}>
            {(index + 1) * 10}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EntriesNumberSetter;
