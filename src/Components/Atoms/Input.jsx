const Input = ({ value }) => {
  return (
    <input type="text" id={value} name={value} placeholder={value} required />
  );
};

export default Input;