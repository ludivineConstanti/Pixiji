// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import {
  SCloudTop, SDragon, SCloudDragon, SCloudBL, SCloudBR,
} from './SCloudDragon';

const CloudDragon = ({ data }) => (
  <>
    <SCloudTop>
      {data[0]}
    </SCloudTop>
    <SDragon>
      {data[1]}
    </SDragon>
    <SCloudDragon>
      {data[2]}
    </SCloudDragon>
    <SCloudBL>
      {data[3]}
    </SCloudBL>
    <SCloudBR>
      {data[4]}
    </SCloudBR>
  </>
);

CloudDragon.propTypes = {
  data: PropTypes.array.isRequired,
};

// == Export
export default CloudDragon;
