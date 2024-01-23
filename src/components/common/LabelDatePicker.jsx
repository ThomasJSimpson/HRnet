import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LabelDatePicker = ({ htmlForId, labelChild, onChange, selected, isRequired }) => {
  return (
    <div className="label-datepicker">
      <label htmlFor={htmlForId}>{labelChild}</label>
      <DatePicker id={htmlForId} selected={selected} onChange={onChange} showMonthDropdown showYearDropdown scrollableYearDropdown required={isRequired ? true : false} />
    </div>
  );
};

export default LabelDatePicker;
