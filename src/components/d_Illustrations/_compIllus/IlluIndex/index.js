// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import RabbitOnMoon from 'src/components/d_Illustrations/_compIllus/RabbitOnMoon';
import SnowMonkeys from 'src/components/d_Illustrations/_compIllus/SnowMonkeys';
import CraneSunset from 'src/components/d_Illustrations/_compIllus/CraneSunset';
import SakuraDeer from 'src/components/d_Illustrations/_compIllus/SakuraDeer';
import KaguyaHime from 'src/components/d_Illustrations/_compIllus/KaguyaHime';
import KodomoNoHi from 'src/components/d_Illustrations/_compIllus/KodomoNoHi';

const IlluIndex = ({ useCase, index, data }) => {
  // naming with useCase and index is also used in the dataIndex in _data
  const illuObj = {
    home0: <RabbitOnMoon data={data} />,
    readMe0: <KodomoNoHi data={data} />,
    about0: <KaguyaHime data={data} />,
    // tried with an array but didn't work, always returned the last element
    quiz0: <SnowMonkeys data={data} />,
    quiz1: <CraneSunset data={data} />,
    quiz2: <SakuraDeer data={data} />,
  };
  return illuObj[`${useCase}${index}`];
};

IlluIndex.propTypes = {
  useCase: PropTypes.string.isRequired,
  index: PropTypes.number,
};

IlluIndex.defaultProps = {
  index: 0,
};

// == Export
export default IlluIndex;
