import './Link.css';

const Text = ({ text, type, link }) => {
  return (
    <a href={link} className={`link link__${type}`}>{text}</a>
  );
};

export default Text;