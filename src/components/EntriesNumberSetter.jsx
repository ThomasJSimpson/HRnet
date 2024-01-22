import React from "react";

const EntriesNumberSetter = ({ pageSize, setPageSize }) => {
  const handlePageSizeChange = (event) => {
    const selectedPageSize = parseInt(event.target.value);
    setPageSize(selectedPageSize);
  };

  return (
    <div>
      <label htmlFor="pageSize">Page Size:</label>
      <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
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
