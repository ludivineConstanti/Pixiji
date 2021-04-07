// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import {
  SSun, SCloudLeft, SCloudRight, SRockLeft, SBaby, SAdult, SRockRight, SWater,
} from './SCraneSunset';

const CraneSunset = ({ arrIlluFormatted }) => {
  const cC = 'craneSunset';
  return (
    <>
      <SSun className={`${cC}__sun`}>
        {arrIlluFormatted[0]}
      </SSun>
      <SCloudLeft className={`${cC}__cloudLeft`}>
        {arrIlluFormatted[1]}
      </SCloudLeft>
      <SCloudRight className={`${cC}__cloudRight`}>
        {arrIlluFormatted[2]}
      </SCloudRight>
      <SRockLeft className={`${cC}__rockLeft`}>
        {arrIlluFormatted[3]}
      </SRockLeft>
      <SBaby className={`${cC}__baby`}>
        {arrIlluFormatted[4]}
      </SBaby>
      <SAdult className={`${cC}__adult`}>
        {arrIlluFormatted[5]}
      </SAdult>
      <SRockRight className={`${cC}__rockRight`}>
        {arrIlluFormatted[6]}
      </SRockRight>
      <SWater />
    </>
  );
};

CraneSunset.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
};

// == Export
export default CraneSunset;
