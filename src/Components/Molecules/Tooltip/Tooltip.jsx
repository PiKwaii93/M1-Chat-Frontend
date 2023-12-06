import { useState, useRef, useEffect } from 'react';
import Text from '../../Atoms/Text/Text';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import './Tooltip.css';

function Tooltip() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (target.current && !target.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="tooltip-container" >
      <Button ref={target} onClick={() => setShow(!show)}>
        Ajouter un icon
      </Button>
      <Overlay target={target.current} show={show} placement="right">
          <div className='tooltip'>
          <Text text="Supprimer + Icon" type="small" propriety="red"/>
          </div>
      
      </Overlay>
    </div>
  );
}

export default Tooltip;
