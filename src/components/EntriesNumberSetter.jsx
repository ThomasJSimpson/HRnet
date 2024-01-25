import React from "react";
import getMaxOptionsChoices from "../utils/getMaxOptionsChoices";
import LabelSelect from "./LabelSelect";
import getPageSizeNumber from "../utils/getPageSizeNumber";

const EntriesNumberSetter = ({ table, ...props }) => {
  const optionsChoicesNumber = getMaxOptionsChoices(table);
  const options = getPageSizeNumber(optionsChoicesNumber);
  const pageSize = table.getState().pagination.pageSize;
  console.log("return EntriesNumberSetter calculated");

  return <LabelSelect defaultValue={pageSize} labelSelectClassName={"page-size"} htmlForId={"page-size"} onChange={(e) => table.setPageSize(e.value)} labelChild={"Page Size :"} options={options} placeholder={pageSize} />;
};

export default EntriesNumberSetter;
