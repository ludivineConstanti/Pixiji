// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import {
  SGround,
  STrunk0, STree0,
  STrunk1, STree1,
  STrunk2, STree2P1, STree2P2,
  SDeer, SIllu,
} from './SSakuraDeer';

const SakuraDeer = ({ data }) => {
  const cC = 'sakuraDeer';
  return (
    <>
      <SGround />
      <SIllu>
        <STrunk0 />
        <STree0 className={`${cC}__tree0`}>
          {data[0]}
        </STree0>
        <STrunk1 />
        <STree1 className={`${cC}__tree1`}>
          {data[1]}
        </STree1>
        <STrunk2 />
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
};

// == Export
export default SakuraDeer;
