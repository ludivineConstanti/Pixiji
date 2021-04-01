// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ProgressSquare from './ProgressSquare';

const ProgressBar = ({ questionNumber, currentNumber }) => {
  const cC = 'progressBar';
  const squaresArr = [];
  for (let i = 0; i < questionNumber; i += 1) {
    squaresArr.push(<ProgressSquare key={`progressSquare${i}`} squareNum={i} currentQuestion={currentNumber} />);
  }
  return (
    <div className={cC}>
      {squaresArr}
    </div>
  );
};

ProgressBar.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
};

// == Export
export default ProgressBar;
