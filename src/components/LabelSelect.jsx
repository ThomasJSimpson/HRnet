import React from "react";
import Select from "react-select";
import Label from "./common/Label";

const LabelSelect = ({ labelSelectClassName, labelClassName, htmlForId, labelChild, onChange, defaultValue, options, ...props }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      color: "black",
      border: "1px solid black",
      borderRadius: "4px",
      boxShadow: "none",
      height: "20px",
      width: htmlForId === "page-size" ? "80px" : "218px",
      maxWidth: "218px",
      backgroundColor: "inherit",
      ":hover": {
        border: "1px solid black",
      },
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "grey",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "black",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "black",
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#4caf50" : state.isFocused ? "#cef0cf" : "#fff",
      color: state.isSelected ? "#fff" : state.isFocused ? "black" : "black",
    }),
  };
  return (
    <div className={labelSelectClassName}>
      <Label className={labelClassName} htmlFor={htmlForId} labelChild={labelChild} />
      <Select id={htmlForId} styles={customStyles} defaultValue={defaultValue} onChange={onChange} options={options} placeholder={props.placeholder} />
    </div>
  );
};

export default LabelSelect;
