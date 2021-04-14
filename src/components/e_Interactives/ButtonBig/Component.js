// == Import npm
import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import Arrow from 'src/components/e_Interactives/Arrow';
import SButtonBig, { SComment, SText, tIn } from './SButtonBig';

const ButtonBig = ({
  comment, text, onClick, colorMain, colorButton, show, side, path, arrowDirection,
}) => {
  const component = useRef(null);
  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [transition, setTransition] = useState(gsap.timeline({ paused: true, duration: 0.35 }));

  // need to put the animation in a hook, otherwise, the element we reference does not exist yet
  useEffect(() => {
    setTransition(tIn(transition, component.current, colorButton !== 'white' ? 'white' : colorMain, side));
  }, []);

  // will automatically switch to reverse true or false for us
  useEffect(() => {
    transition.reversed(!show);
  }, [show]);

  return (
    <SButtonBig
      as={path ? NavLink : 'button'}
      ref={component}
      onClick={onClick}
      type="button"
      disabled={!show}
      to={path}
      s={{ colorButton, side }}
    >
      {show && (
      <>
        <SComment>{comment}</SComment>
        <SText>{text}</SText>
        <Arrow pointsToward={arrowDirection} isWhite={colorButton !== 'white'} />
      </>
      )}
    </SButtonBig>
  );
};

ButtonBig.propTypes = {
  comment: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  colorMain: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  side: PropTypes.string,
  path: PropTypes.string,
  arrowDirection: PropTypes.string,
  colorButton: PropTypes.string,
};

ButtonBig.defaultProps = {
  comment: '',
  onClick: () => {},
  side: 'left',
  path: '',
  arrowDirection: 'right',
  colorButton: 'white',
};

// == Export
export default ButtonBig;
