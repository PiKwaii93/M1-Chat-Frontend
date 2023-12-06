import './Input.css';

const Input = ({ type, placeholder, isRequired }) => {
  return (
    <input type="text" className={`input input__${type}`} placeholder={placeholder} required={isRequired} />
  );
};

export default Input;