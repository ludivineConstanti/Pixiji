// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const SnowMonkeys = ({ arrIlluFormatted }) => {
  const cC = 'snowMonkeys';
  return (
    <>
      <div className={`${cC}__monkeyRight`}>
        {arrIlluFormatted[0]}
      </div>
    </>
  );
};

SnowMonkeys.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
};

// == Export
export default SnowMonkeys;
