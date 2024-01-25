const Button = ({ className, type, onClick, isDisabled, style, children, ...props }) => {
  return (
    <button className={`${className} button ${isDisabled ? "selected" : ""}`} type={type} onClick={onClick} disabled={isDisabled ? true : false} style={{ cursor: isDisabled ? "" : "pointer", ...style }}>
      {children}
    </button>
  );
};

export default Button;
