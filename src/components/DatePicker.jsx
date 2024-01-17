import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { parseISO } from "date-fns";

const DatePickerCustom = (props) => {
  const { id, date, updateInputDate } = props;
  const dispatch = useDispatch();

  const handleChange = (date) => {
    // Format ISO 8601
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const newDate = `${year}-${month}-${day}`;
    // console.log(newDate);
    // dispatch(updateInputDate(newDate));
    dispatch(updateInputDate());
  };
  return (
    <>
      <DatePicker id={id} selected={date} onChange={handleChange} showMonthDropdown showYearDropdown dateFormatCalendar="MMMM" scrollableYearDropdown required />
    </>
  );
};

export default DatePickerCustom;
