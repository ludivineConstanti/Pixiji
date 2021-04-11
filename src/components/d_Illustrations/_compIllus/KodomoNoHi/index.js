// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import {
  SPole0, SPole1, SFish0, SFish1, SFish2,
} from './SKodomoNoHi';

const KodomoNoHi = ({ data }) => {
  const cC = 'kodomoNoHi';
  return (
    <>
      <SPole0 />
      <SPole1 />
      <SFish0 className={`${cC}__fish0`}>
        {data[0]}
      </SFish0>
      <SFish1 className={`${cC}__fish1`}>
        {data[1]}
      </SFish1>
      <SFish2 className={`${cC}__fish2`}>
        {data[2]}
      </SFish2>
    </>
  );
};

KodomoNoHi.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default KodomoNoHi;
