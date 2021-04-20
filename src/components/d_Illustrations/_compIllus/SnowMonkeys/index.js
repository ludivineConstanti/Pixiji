// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import { SMonkeyLeft, SMonkeyRight, SRocks } from './SSnowMonkey';

const SnowMonkeys = ({ data }) => (
  <>
    <IlluGround color="#80ACAC" />
    <SMonkeyLeft>
      {data[0]}
    </SMonkeyLeft>
    <SMonkeyRight>
      {data[1]}
    </SMonkeyRight>
    <SRocks>
      {data[2]}
    </SRocks>
  </>
);

SnowMonkeys.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default SnowMonkeys;
