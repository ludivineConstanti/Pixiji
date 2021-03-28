// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const ProgressBar = ({ questionNumber, currentNumber }) => {
  const cC = 'progressBar';
  return (
    <div className={cC} />
  );
};

ProgressBar.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  currentNumber: PropTypes.number.isRequired,
};

// == Export
export default ProgressBar;
