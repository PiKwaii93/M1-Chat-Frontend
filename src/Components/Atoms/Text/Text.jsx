import './Text.css';

const Text = ({ text, type, propriety }) => {
  return (
    <p className={`text ${type}__${propriety}`}>{text}</p>
  );
};
  
export default Text;