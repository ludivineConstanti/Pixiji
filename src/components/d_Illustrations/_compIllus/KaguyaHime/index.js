// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import IlluDecoOnGround from 'src/components/d_Illustrations/_elements/IlluDecoOnGround';
import {
  greenD1, SIllu, SMoon, SHime, bSettings,
} from './SKaguyaHime';

const KaguyaHime = ({ data, kanjisArr, totalKanjis }) => {
  const cC = 'kaguyaHime';
  return (
    <>
      <IlluGround color={greenD1} />
      <SIllu>
        {
        bSettings.map((bamboo, i) => (
          <IlluDecoOnGround
            key={`${cC}__bamboo${i}`}
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

        <SMoon className={`${cC}__moon`}>
          {data[0]}
        </SMoon>
        <SHime className={`${cC}__hime`}>
          {data[1]}
        </SHime>
      </SIllu>
    </>
  );
};

KaguyaHime.propTypes = {
  data: PropTypes.array.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  totalKanjis: PropTypes.number.isRequired,
};

// == Export
export default KaguyaHime;
