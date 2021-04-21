// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import IlluDecoOnGround from 'src/components/d_Illustrations/_elements/IlluDecoOnGround';
import { vBackgroundText } from 'src/styles/animation';
import {
  bambooColors, SMoon, SHime, bSettings, SBackgroundColor,
} from './SKaguyaHime';

const KaguyaHime = ({ data, kanjisArr, totalKanjis }) => (
  <>
    <IlluGround color={bambooColors[2]} />
    {
        bSettings.map((bamboo, i) => (
          <IlluDecoOnGround
            key={`bamboo${i}`}
            color={bamboo.color}
            side={bamboo.side}
            margin={[bamboo.margin]}
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
    <SBackgroundColor
      variants={vBackgroundText}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  </>
);

KaguyaHime.propTypes = {
  data: PropTypes.array.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  totalKanjis: PropTypes.number.isRequired,
};

// == Export
export default KaguyaHime;
