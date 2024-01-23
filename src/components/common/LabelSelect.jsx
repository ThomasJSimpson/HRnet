import React from "react";
import Select from "react-select";

const LabelSelect = ({ htmlForId, labelChild, onChange, defaultValue, options }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      color: "black",
      border: "1px solid black",
      borderRadius: "4px",
      boxShadow: "none",
      height: "20px",
      width: "100%", // Ajoutez votre largeur ici
      backgroundColor: "inehrit",
      ":hover": {
        border: "1px solid black",
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "grey",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "black",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: "black",
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#ccc" : state.isFocused ? "#eee" : "#fff",
      color: "black",
    }),
  };

  return (
    <>
      <label htmlFor={htmlForId}>{labelChild}</label>
      <Select styles={customStyles} defaultValue={defaultValue} onChange={onChange} options={options} />
    </>
  );
};

export default LabelSelect;
