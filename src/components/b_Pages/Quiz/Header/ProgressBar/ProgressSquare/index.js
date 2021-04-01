// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const ProgressSquare = ({ current }) => {
  const cC = 'progressSquare';
  return (
    <div className={current ? `${cC} ${cC}--activated` : cC} />
  );
};

ProgressSquare.propTypes = {
  current: PropTypes.bool.isRequired,
};

// == Export
export default ProgressSquare;
