// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Stars from 'src/components/d_Illustrations/_elements/Stars';
import { orangeL2 } from 'src/components/d_Illustrations/_data/cloudDragon';
import {
  SCloudTop, SDragon, SCloudDragon, SCloudBL, SCloudBR,
} from './SCloudDragon';

const CloudDragon = ({ data, kanjis, totalKanjis }) => (
  <>
    {totalKanjis >= kanjis && <Stars color={orangeL2} />}
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
  kanjis: PropTypes.number.isRequired,
  totalKanjis: PropTypes.number.isRequired,
};

// == Export
export default CloudDragon;
