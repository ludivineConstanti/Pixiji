// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import {
  SGround, SIllu, SMoon, SHime, SBamboo, bSettings,
} from './SKaguyaHime';

const KaguyaHime = ({ data }) => {
  const cC = 'kaguyaHime';
  return (
    <>
      <SGround />
      <SIllu>
        {
        bSettings.map((bamboo, i) => <SBamboo key={`${cC}__bamboo${i}`} side={bamboo.side} margin={bamboo.margin} color={bamboo.color} />)
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
};

// == Export
export default KaguyaHime;
