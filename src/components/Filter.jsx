import React from "react";
import Input from "./common/Input";
import Label from "./common/Label";

const Filter = ({ globalFilter, setGlobalFilter, ...props }) => {
  return (
    <div className="filter">
      <Label htmlFor={"filter"} labelChild={"Search :"} />
      <Input type="text" id="filter" onChange={(e) => setGlobalFilter(e.target.value.trim())} value={globalFilter} />
    </div>
  );
};
export default Filter;
