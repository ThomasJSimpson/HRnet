const Label = ({ className, htmlFor, labelChild }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {labelChild}
    </label>
  );
};

export default Label;
