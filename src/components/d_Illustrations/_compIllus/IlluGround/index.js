// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SIlluGround from './SIlluGround';

const CraneSunset = ({ color }) => {
  const vIlluGround = {
    initial: { width: '0vw' },
    animate: { width: '100vw' },
  };
  return (
    <SIlluGround
      s={{ color }}
      variants={vIlluGround}
      initial="initial"
      animate="animate"
      exit="initial"
    />
  );
};

CraneSunset.propTypes = {
  color: PropTypes.string.isRequired,
};

// == Export
export default CraneSunset;
