// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import { SMonkeyLeft, SMonkeyOnRocks } from './SSnowMonkey';
import IlluGround from '../IlluGround';

const SnowMonkeys = ({ data }) => {
  const cC = 'snowMonkeys';
  return (
    <>
      <IlluGround color="#80ACAC" />
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
    </>
  );
};

SnowMonkeys.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default SnowMonkeys;
