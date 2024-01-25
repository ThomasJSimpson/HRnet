import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from "./common/Label";

const LabelDatePicker = ({ labelDateClassName, labelClassName, htmlForId, labelChild, onChange, selected, isRequired }) => {
  return (
    <div className={labelDateClassName}>
      <Label className={labelClassName} htmlFor={htmlForId} labelChild={labelChild} />
      <DatePicker minDate={new Date("01/01/1950")} maxDate={new Date("01/01/2050")} todayButton="Today" yearDropdownItemNumber={100} id={htmlForId} selected={selected} onChange={onChange} required={isRequired ? true : false} showMonthDropdown showYearDropdown scrollableYearDropdown />
    </div>
  );
};

export default LabelDatePicker;
