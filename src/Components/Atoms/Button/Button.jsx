import './Button.css';

const Button = ({ text, type }) => {
  return (
    <button className={`button button__${type}`}>{text}</button>
  );
};

export default Button;