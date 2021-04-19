// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import IlluDecoOnGround from 'src/components/d_Illustrations/_elements/IlluDecoOnGround';
import { SFish0, SFish1, SFish2 } from './SKodomoNoHi';

const KodomoNoHi = ({ data, kanjisArr, numKanjis }) => {
  const cC = 'kodomoNoHi';
  const poleColor = '#120B42';
  return (
    <>
      <IlluDecoOnGround
        color={poleColor}
        side="right"
        margin={49}
        width={1}
        height={21}
        kanjisArr={kanjisArr}
        isOnNum={numKanjis[1]}
      />
      <IlluDecoOnGround
        color={poleColor}
        side="right"
        margin={32}
        width={1}
        height={33}
        kanjisArr={kanjisArr}
        isOnNum={numKanjis[2]}
      />
      <SFish0 className={`${cC}__fish0`}>
        {data[0]}
      </SFish0>
      <SFish1 className={`${cC}__fish1`}>
        {data[1]}
      </SFish1>
      <SFish2 className={`${cC}__fish2`}>
        {data[2]}
      </SFish2>
    </>
  );
};

KodomoNoHi.propTypes = {
  data: PropTypes.array.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  numKanjis: PropTypes.array.isRequired,
};

// == Export
export default KodomoNoHi;
