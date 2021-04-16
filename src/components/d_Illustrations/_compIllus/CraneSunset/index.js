// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import IlluGround from '../IlluGround';
import {
  SSun, SCloudLeft, SCloudRight, SRockLeft, SBaby, SAdult, SRockRight,
} from './SCraneSunset';

const CraneSunset = ({ data }) => {
  const cC = 'craneSunset';
  return (
    <>
      <SSun className={`${cC}__sun`}>
        {data[0]}
      </SSun>
      <SCloudLeft className={`${cC}__cloudLeft`}>
        {data[1]}
      </SCloudLeft>
      <SCloudRight className={`${cC}__cloudRight`}>
        {data[2]}
      </SCloudRight>
      <SRockLeft className={`${cC}__rockLeft`}>
        {data[3]}
      </SRockLeft>
      <SBaby className={`${cC}__baby`}>
        {data[4]}
      </SBaby>
      <SAdult className={`${cC}__adult`}>
        {data[5]}
      </SAdult>
      <SRockRight className={`${cC}__rockRight`}>
        {data[6]}
      </SRockRight>
      <IlluGround color="#398084" />
    </>
  );
};

CraneSunset.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default CraneSunset;
