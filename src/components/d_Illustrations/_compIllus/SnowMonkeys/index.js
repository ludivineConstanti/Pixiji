// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import { SWater, SMonkeyLeft, SMonkeyOnRocks } from './SSnowMonkey';

const SnowMonkeys = ({ data }) => {
  const cC = 'snowMonkeys';
  return (
    <>
      <SMonkeyLeft className={`${cC}__monkeyLeft`}>
        {data[0]}
      </SMonkeyLeft>
      <SMonkeyOnRocks>
        <div className={`${cC}__monkeyRight`}>
          {data[1]}
        </div>
        <div className={`${cC}__rocks`}>
          {data[2]}
        </div>
      </SMonkeyOnRocks>
      <SWater className={`${cC}__water`} />
    </>
  );
};

SnowMonkeys.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default SnowMonkeys;
