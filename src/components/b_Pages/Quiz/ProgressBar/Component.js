// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import ProgressSquare from '../ProgressSquare';

const ProgressBar = ({ questionNumber, currentNumber, finishedQuiz }) => {
  const cC = 'progressBar';
  const squaresArr = [];
  const cRef = useRef(null);

  const [transition, setTransition] = useState(gsap.timeline(
    { paused: true, duration: 0.35 },
  ));

  useEffect(() => {
    setTransition(transition.to(cRef.current, { marginTop: '24px', ease: 'inOut' }));
    transition.play();
  }, []);

  useEffect(() => {
    if (finishedQuiz) {
      transition.reverse();
    }
  }, [finishedQuiz]);
  for (let i = 0; i < questionNumber; i += 1) {
    squaresArr.push(<ProgressSquare key={`progressSquare${i}`} squareNum={i} currentQuestion={currentNumber} />);
  }
  return (
    <div className={cC} ref={cRef}>
      {squaresArr}
    </div>
  );
};

ProgressBar.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
  finishedQuiz: PropTypes.bool.isRequired,
};

// == Export
export default ProgressBar;