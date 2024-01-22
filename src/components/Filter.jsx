import React from "react";
const Filter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="search-bar">
      <p>Search:</p>
      <input type="text" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value.trim())}></input>
    </div>
  );
};
export default Filter;
