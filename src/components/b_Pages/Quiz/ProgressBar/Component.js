// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SProgressBar from './SProgressBar';
import ProgressSquare from '../ProgressSquare';

const ProgressBar = ({ questionNumber, currentNumber }) => {
  const squaresArr = [];

  const vProgressBar = {
    initial: { marginTop: 0 },
    animate: { marginTop: '16px' },
  };

  for (let i = 0; i < questionNumber; i += 1) {
    squaresArr.push(<ProgressSquare key={`progressSquare${i}`} squareNum={i} currentQuestion={currentNumber} />);
  }
  return (
    <SProgressBar
      variants={vProgressBar}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      {squaresArr}
    </SProgressBar>
  );
};

ProgressBar.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
};

// == Export
export default ProgressBar;
