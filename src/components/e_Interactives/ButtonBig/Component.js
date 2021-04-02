// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';

const ButtonBig = ({
  comment, text, onClick, colorMain,
}) => {
  // cC for classComponent
  const cC = 'buttonBig';
  const tl = gsap.timeline({ paused: true });
  const component = useRef(null);

  useEffect(() => {
    tl.from(component.current, 0.35, {
      ease: 'easeOut', xPercent: -100, width: '20%', color: 'white',
    }).set(component.current, { clearProps: 'width, translate' }).play();
    return () => tl.to(component.current, 0.35, { x: '-200px' }).play();
  }, []);

  return (
    <button
      ref={component}
      className={`${cC}`}
      onClick={onClick}
      type="button"
      style={{ color: `${colorMain}` }}
    >
      <span className={`${cC}__result`}>{comment}</span> {text}
      <div className={`${cC}__arrow`}>
        <div style={{ backgroundColor: `${colorMain}` }} className={`${cC}__arrow--stroke`} />
        <div className={`${cC}__arrow--end`} style={{ borderColor: `${colorMain}` }} />
      </div>
    </button>
  );
};

ButtonBig.propTypes = {
  comment: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  colorMain: PropTypes.string.isRequired,
};

ButtonBig.defaultProps = {
  comment: '',
  onClick: () => {},
};

// == Export
export default ButtonBig;
