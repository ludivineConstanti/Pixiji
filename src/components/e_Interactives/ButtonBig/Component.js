// == Import npm
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import SButtonBig, { tIn } from './SButtonBig';

const ButtonBig = ({
  comment, text, onClick, colorMain, show,
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

  return (
    <SButtonBig
      ref={component}
      className={`${cC}`}
      onClick={onClick}
      type="button"
    >
      {show && (
      <>
        <span className={`${cC}__result`}>{comment}</span> {text}
        <div className={`${cC}__arrow`}>
          <div style={{ backgroundColor: `${colorMain}` }} className={`${cC}__arrow--stroke`} />
          <div className={`${cC}__arrow--end`} style={{ borderColor: `${colorMain}` }} />
        </div>
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
};

ButtonBig.defaultProps = {
  comment: '',
  onClick: () => {},
};

// == Export
export default ButtonBig;
