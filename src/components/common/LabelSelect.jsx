import React from "react";
import Select from "react-select";

const LabelSelect = ({ htmlForId, labelChild, onChange, defaultValue, options }) => {
  return (
    <>
      <label htmlFor={htmlForId}>{labelChild}</label>
      <Select defaultValue={defaultValue} onChange={onChange} options={options} />
    </>
  );
};

export default LabelSelect;
