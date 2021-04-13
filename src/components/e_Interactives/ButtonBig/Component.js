// == Import npm
import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import Arrow from 'src/components/e_Interactives/Arrow';
import SButtonBig, { tIn } from './SButtonBig';

const ButtonBig = ({
  comment, text, onClick, colorMain, show, side, path,
}) => {
  // cC for classComponent
  const cC = 'buttonBig';
  const component = useRef(null);
  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [transition, setTransition] = useState(gsap.timeline({ paused: true, duration: 0.35 }));

  // need to put the animation in a hook, otherwise, the element we reference does not exist yet
  useEffect(() => {
    setTransition(tIn(transition, component.current, colorMain));
  }, []);

  // will automatically switch to reverse true or false for us
  useEffect(() => {
    transition.reversed(!show);
  }, [show]);

  const content = show && (
    <>
      <span className={`${cC}__result`}>{comment}</span> {text}
      <Arrow />
    </>
  );

  return (
    <SButtonBig
      as={path ? NavLink : 'button'}
      ref={component}
      className={`${cC}`}
      onClick={onClick}
      type="button"
      colorMain={colorMain}
      side={side}
      disabled={!show}
      to={path}
    >
      {content}
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
};

ButtonBig.defaultProps = {
  comment: '',
  onClick: () => {},
  side: 'left',
  path: '',
};

// == Export
export default ButtonBig;
