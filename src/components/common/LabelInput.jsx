import React from "react";

const LabelInput = ({ htmlForId, labelChild, type, onChange, value, isRequired }) => {
  return (
    <>
      <label htmlFor={htmlForId}>{labelChild}</label>
      <input type={type} id={htmlForId} onChange={onChange} value={value} required={isRequired ? true : false} />
    </>
  );
};

export default LabelInput;
