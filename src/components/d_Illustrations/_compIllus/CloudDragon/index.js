// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import {
  SCloudTop, SDragon, SCloudDragon, SCloudBL, SCloudBR,
} from './SCloudDragon';

const CloudDragon = ({ data }) => {
  const cC = 'cloudDragon';
  return (
    <>
      <SCloudTop className={`${cC}__cloudTop`}>
        {data[0]}
      </SCloudTop>
      <SDragon className={`${cC}__dragon`}>
        {data[1]}
      </SDragon>
      <SCloudDragon className={`${cC}__cloudDragon`}>
        {data[2]}
      </SCloudDragon>
      <SCloudBL className={`${cC}__cloudBL`}>
        {data[3]}
      </SCloudBL>
      <SCloudBR className={`${cC}__cloudBR`}>
        {data[4]}
      </SCloudBR>
    </>
  );
};

CloudDragon.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default CloudDragon;
