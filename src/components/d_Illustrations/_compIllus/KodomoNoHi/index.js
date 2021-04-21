// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Stars from 'src/components/d_Illustrations/_elements/Stars';
import IlluDecoOnGround from 'src/components/d_Illustrations/_elements/IlluDecoOnGround';
import { SFish0, SFish1, SFish2 } from './SKodomoNoHi';

const KodomoNoHi = ({ data, kanjis, numKanjis }) => {
  const poleColor = '#120B42';
  return (
    <>
      {numKanjis[numKanjis.length - 1] >= kanjis && <Stars color="#FFED48" />}
      <IlluDecoOnGround
        color={poleColor}
        side="right"
        margin={[42, 49]}
        width={1}
        height={21}
        kanjis={kanjis}
        isOnNum={numKanjis[1]}
      />
      <IlluDecoOnGround
        color={poleColor}
        side="right"
        margin={[27, 32]}
        width={1}
        height={33}
        kanjis={kanjis}
        isOnNum={numKanjis[2]}
      />
      <SFish0>
        {data[0]}
      </SFish0>
      <SFish1>
        {data[1]}
      </SFish1>
      <SFish2>
        {data[2]}
      </SFish2>
    </>
  );
};

KodomoNoHi.propTypes = {
  data: PropTypes.array.isRequired,
  kanjis: PropTypes.number.isRequired,
  numKanjis: PropTypes.array.isRequired,
};

// == Export
export default KodomoNoHi;
