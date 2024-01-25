import React from "react";
import Input from "./common/Input";
import Label from "./common/Label";

const LabelInput = ({ labelInputClassName, inputClassName, labelClassName, htmlForId, labelChild, type, onChange, value, isRequired, ...props }) => {
  return (
    <div className={labelInputClassName}>
      <Label className={labelClassName} htmlFor={htmlForId} labelChild={labelChild} />

      <Input className={inputClassName} type={type} id={htmlForId} onChange={onChange} value={value} isRequired={isRequired} />
    </div>
  );
};

export default LabelInput;
