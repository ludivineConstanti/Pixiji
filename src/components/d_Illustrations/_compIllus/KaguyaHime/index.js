// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import IlluDecoOnGround from 'src/components/d_Illustrations/_elements/IlluDecoOnGround';
import {
  greenD1, SMoon, SHime, bSettings,
} from './SKaguyaHime';

const KaguyaHime = ({ data, kanjisArr, totalKanjis }) => (
  <>
    <IlluGround color={greenD1} />
    {
        bSettings.map((bamboo, i) => (
          <IlluDecoOnGround
            key={`bamboo${i}`}
            color={bamboo.color}
            side={bamboo.side}
            margin={bamboo.margin}
            width={2}
            touchGround
            height={100}
            kanjisArr={kanjisArr}
            isOnNum={totalKanjis}
          />
        ))
}
    <SMoon>
      {data[0]}
    </SMoon>
    <SHime>
      {data[1]}
    </SHime>
  </>
);

KaguyaHime.propTypes = {
  data: PropTypes.array.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  totalKanjis: PropTypes.number.isRequired,
};

// == Export
export default KaguyaHime;
