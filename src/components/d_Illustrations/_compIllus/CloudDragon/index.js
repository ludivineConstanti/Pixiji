// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import { SDragon, SCloud } from './SCloudDragon';

const CloudDragon = ({ data }) => {
  const cC = 'cloudDragon';
  return (
    <>
      <SDragon className={`${cC}__dragon`}>
        {data[0]}
      </SDragon>
      <SCloud className={`${cC}__cloud`}>
        {data[1]}
      </SCloud>
    </>
  );
};

CloudDragon.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default CloudDragon;
