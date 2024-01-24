import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LabelDatePicker = ({ labelDateClassName, labelClassName, htmlForId, labelChild, onChange, selected, isRequired }) => {
  return (
    <div className={labelDateClassName}>
      <label className={labelClassName} htmlFor={htmlForId}>
        {labelChild}
      </label>
      <DatePicker id={htmlForId} selected={selected} onChange={onChange} required={isRequired ? true : false} showMonthDropdown showYearDropdown scrollableYearDropdown />
    </div>
  );
};

export default LabelDatePicker;
