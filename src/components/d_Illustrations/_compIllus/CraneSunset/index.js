// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

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
      <div className={`${cC}__rockLeft`}>
        {arrIlluFormatted[3]}
      </div>
      <div className={`${cC}__baby`}>
        {arrIlluFormatted[4]}
      </div>
      <div className={`${cC}__adult`}>
        {arrIlluFormatted[5]}
      </div>
      <div className={`${cC}__rockRight`}>
        {arrIlluFormatted[6]}
      </div>
      <div className={`${cC}__water`} />
    </>
  );
};

CraneSunset.propTypes = {
  arrIlluFormatted: PropTypes.array.isRequired,
};

// == Export
export default CraneSunset;
