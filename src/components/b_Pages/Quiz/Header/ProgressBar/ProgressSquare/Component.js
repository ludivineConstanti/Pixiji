// == Import npm
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';

const ProgressSquare = ({ squareNum, currentQuestion, finishedQuiz }) => {
  const cC = 'progressSquare';
  const cRef = useRef(null);
  const cTl = gsap.timeline();
  const duration = 0.5;

  const [transition, setTransition] = useState(gsap.timeline(
    { paused: true, duration: 0.35 },
  ));

  // animate when comes in
  useEffect(() => {
    setTransition(transition.to(cRef.current, {
      margin: '0 1.15vw 0 1.15vw', ease: 'inOut', height: '2px', width: '2px',
    }));
    transition.play();
  }, []);

  // animate when disappears
  useEffect(() => {
    if (finishedQuiz) {
      transition.reverse();
    }
  }, [finishedQuiz]);

  // animate when the question number changes
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
  finishedQuiz: PropTypes.bool.isRequired,
};

// == Export
export default ProgressSquare;
