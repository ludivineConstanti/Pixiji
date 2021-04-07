// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import {
  SRockLeft, SBaby, SAdult, SRockRight, SWater,
} from './SCraneSunset';

const CraneSunset = ({ arrIlluFormatted }) => {
  const cC = 'craneSunset';
  return (
    <>
      <div className={`${cC}__sun`}>
        {arrIlluFormatted[0]}
      </div>
      <div className={`${cC}__cloudLeft`}>
        {arrIlluFormatted[1]}
      </div>
      <div className={`${cC}__cloudRight`}>
        {arrIlluFormatted[2]}
      </div>
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
