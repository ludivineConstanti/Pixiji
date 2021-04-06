// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import { SWater, SMonkeyLeft, SMonkeyOnRocks } from './SSnowMonkey';

const SnowMonkeys = ({ arrIlluFormatted }) => {
  const cC = 'snowMonkeys';
  return (
    <>
      <SMonkeyLeft className={`${cC}__monkeyLeft`}>
        {arrIlluFormatted[0]}
      </SMonkeyLeft>
      <SMonkeyOnRocks>
        <div className={`${cC}__monkeyRight`}>
          {arrIlluFormatted[1]}
        </div>
        <div className={`${cC}__rocks`}>
          {arrIlluFormatted[2]}
        </div>
      </SMonkeyOnRocks>
      <SWater className={`${cC}__water`} />
    </>
  );
};

SnowMonkeys.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
};

// == Export
export default SnowMonkeys;
