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
import CloudDragon from 'src/components/d_Illustrations/_compIllus/CloudDragon';

const IlluIndex = ({
  useCase, index, data, kanjisArr, arrNumKanjis,
}) => {
  // naming with useCase and index is also used in the dataIndex in _data
  const illuObj = {
    home0: <RabbitOnMoon data={data} />,
    readMe0: <KodomoNoHi
      data={data}
      kanjisArr={kanjisArr}
      numKanjis={arrNumKanjis}
    />,
    about0: <KaguyaHime
      data={data}
      kanjisArr={kanjisArr}
      totalKanjis={arrNumKanjis[arrNumKanjis.length - 1]}
    />,
    error4040: <CloudDragon data={data} />,
    // tried with an array but didn't work, always returned the last element
    quiz0: <SnowMonkeys data={data} />,
    quiz1: <CraneSunset data={data} kanjisArr={kanjisArr} numKanjis={arrNumKanjis} />,
    quiz2: <SakuraDeer
      data={data}
      kanjisArr={kanjisArr}
      numKanjis={arrNumKanjis}
    />,
  };
  return illuObj[`${useCase}${index}`];
};

IlluIndex.propTypes = {
  useCase: PropTypes.string.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  index: PropTypes.number,
  arrNumKanjis: PropTypes.array.isRequired,
};

IlluIndex.defaultProps = {
  index: 0,
};

// == Export
export default IlluIndex;
