// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';

const RabbitOnMoon = ({ arrIlluFormatted }) => {
  const cC = 'moonRabbit';
  return (
    <>
      <div className={`${cC}__planet`}>
        {arrIlluFormatted[0]}
      </div>
      <div className={`${cC}__rabbitOnMoon`}>
        <div className={`${cC}__rabbit`}>
          {arrIlluFormatted[1]}
        </div>
        <div className={`${cC}__moon`}>
          {arrIlluFormatted[2]}
        </div>
      </div>
    </>
  );
};

RabbitOnMoon.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
};

// == Export
export default RabbitOnMoon;
