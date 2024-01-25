const Label = ({ className, htmlFor, labelChild, ...props }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {labelChild}
    </label>
  );
};

export default Label;
