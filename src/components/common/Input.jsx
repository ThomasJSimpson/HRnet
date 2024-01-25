const Input = ({ className, type, id, onChange, value, isRequired, ...props }) => {
  return <input className={className} type={type} id={id} onChange={onChange} value={value} required={isRequired ? true : false}></input>;
};

export default Input;
