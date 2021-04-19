// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import IlluGround from 'src/components/d_Illustrations/_elements/IlluGround';
import IlluDecoOnGround from 'src/components/d_Illustrations/_elements/IlluDecoOnGround';
import {
  STree0, STree1, STree2P1, STree2P2, SDeer, SIllu,
} from './SSakuraDeer';

const SakuraDeer = ({ data, kanjisArr, numKanjis }) => {
  const cC = 'sakuraDeer';
  const trunkColor = '#510909';
  return (
    <>
      <IlluGround color="#9B3471" />
      <SIllu>
        <IlluDecoOnGround
          color={trunkColor}
          side="right"
          margin={46}
          width={2}
          height={10}
          touchGround
          kanjisArr={kanjisArr}
          isOnNum={numKanjis[0]}
        />
        <STree0 className={`${cC}__tree0`}>
          {data[0]}
        </STree0>
        <IlluDecoOnGround
          color={trunkColor}
          side="right"
          margin={38}
          width={2}
          height={20}
          touchGround
          kanjisArr={kanjisArr}
          isOnNum={numKanjis[1]}
        />
        <STree1 className={`${cC}__tree1`}>
          {data[1]}
        </STree1>
        <IlluDecoOnGround
          color={trunkColor}
          side="right"
          margin={8}
          width={2}
          height={25}
          touchGround
          kanjisArr={kanjisArr}
          isOnNum={numKanjis[3]}
        />
        <STree2P1 className={`${cC}__tree2P1`}>
          {data[2]}
        </STree2P1>
        <STree2P2 className={`${cC}__tree2P2`}>
          {data[3]}
        </STree2P2>
        <SDeer className={`${cC}__deer`}>
          {data[4]}
        </SDeer>
      </SIllu>
    </>
  );
};

SakuraDeer.propTypes = {
  data: PropTypes.array.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  numKanjis: PropTypes.array.isRequired,
};

// == Export
export default SakuraDeer;
