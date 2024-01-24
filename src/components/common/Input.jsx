const Input = ({ className, type, id, onChange, value, isRequired }) => {
  return <input className={className} type={type} id={id} onChange={onChange} value={value} required={isRequired ? true : false} />;
};

export default Input;
