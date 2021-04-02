// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';

const ProgressSquare = ({ squareNum, currentQuestion }) => {
  const cC = 'progressSquare';
  const cRef = useRef(null);
  const cTl = gsap.timeline();
  const duration = 0.5;
  useEffect(() => {
    if (squareNum === currentQuestion) {
      cTl.to(cRef.current, duration, { ease: 'inOut', scale: '2', backgroundColor: 'white' }).play();
    }
    else if (squareNum === currentQuestion - 1) {
      cTl.to(cRef.current, duration, { ease: 'inOut', scale: '1' }).play();
    }
  }, [currentQuestion]);
  return (
    <div ref={cRef} className={`${cC}`} />
  );
};

ProgressSquare.propTypes = {
  squareNum: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired,
};

// == Export
export default ProgressSquare;
