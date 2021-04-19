// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import { SMonkeyLeft, SMonkeyOnRocks } from './SSnowMonkey';

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
