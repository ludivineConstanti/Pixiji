// == Import npm
import React, { useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';

const TextWithTitle = ({}) => {
  // cC for classComponent
  const cC = 'textWithTitle';
  const tl = gsap.timeline({ paused: true });
  const component = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <div className={cC}>
      <h1 className={`${cC}__title`}>Well done!</h1>
      <p className={`${cC}__text`}>
        You answed all the questions correctly!
      </p>
      <p className={`${cC}__text`}>
        Try putting your mouse over the squares, on the right, to look at the answers again.
      </p>
    </div>
  );
};

/* TextWithTitle.propTypes = {
  comment: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  colorMain: PropTypes.string.isRequired,
};

TextWithTitle.defaultProps = {
  comment: '',
  onClick: () => {},
}; */

// == Export
export default TextWithTitle;
