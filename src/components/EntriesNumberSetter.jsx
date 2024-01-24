import React from "react";
import getMaxOptionsChoices from "../utils/getMaxOptionsChoices";
import LabelSelect from "./LabelSelect";
import getPageSizeNumber from "../utils/getPageSizeNumber";

const EntriesNumberSetter = ({ table }) => {
  const optionsChoicesNumber = getMaxOptionsChoices(table);
  const options = getPageSizeNumber(optionsChoicesNumber);
  const pageSize = table.getState().pagination.pageSize;

  return <LabelSelect defaultValue={pageSize} labelSelectClassName={"page-size"} htmlFor={"pageSize"} onChange={(e) => table.setPageSize(e.value)} labelChild={"Page Size :"} options={options} />;
};

export default EntriesNumberSetter;
