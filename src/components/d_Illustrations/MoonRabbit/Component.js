// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';
import { squaresShrink, squaresGrow } from 'src/components/d_Illustrations/_helpers/transitions';
import createIllustration from 'src/components/d_Illustrations/_helpers/createIllustration';
import arrIllu from './_data/arrIllu';

const MoonRabbit = ({ kanjisArr, updateValueGlobal }) => {
  const cC = 'moonRabbit';
  // I use 2 groups to keep a reference for the divs
  // one for the first animation where they all get reduced at the same time
  // GSAP needs individual arrays to figure out where their center is
  // the other to animate every time I answer a question
  const squareMainRef = useRef([]);
  for (let i = 0; i < arrIllu.length; i += 1) {
    squareMainRef.current.push([]);
  }
  const squareGroupRef = useRef([]);

  useEffect(() => {
    updateValueGlobal({ obj: 'UI', prop: ['colorMain'], value: ['#0A2846'] });
    for (let i = 0; i < arrIllu.length; i += 1) {
      squaresShrink(squareMainRef.current[i]);
    }
  }, []);

  const [lastUpdated, setLastUpdated] = useState(0);

  useEffect(() => {
    // need a loop so that it works with the cheating button too
    for (let i = lastUpdated; i < kanjisArr.length; i += 1) {
      squaresGrow(squareGroupRef.current[i]);
    }
    setLastUpdated(kanjisArr.length);
  }, [kanjisArr]);

  const arrIlluFormatted = [];
  // need the number at the end so that it doesn't always start from 0
  // while pushing the groups in the squareContainer array
  let beginAtIndex = 0;
  for (let i = 0; i < arrIllu.length; i += 1) {
    arrIlluFormatted.push(
      createIllustration(arrIllu[i], i, squareMainRef, squareGroupRef, beginAtIndex),
    );
    beginAtIndex += arrIllu[i].length;
  }
  return (
    <>
      <div className={`${cC}__planet`}>
        {arrIlluFormatted[0]}
      </div>
      <div className={`${cC}__rabbitOnMoon`}>
        <div className={`${cC}__rabbit`}>
          {arrIlluFormatted[1]}
        </div>
        <div className={`${cC}__moon`}>
          {arrIlluFormatted[2]}
        </div>
      </div>
    </>
  );
};

MoonRabbit.propTypes = {
  kanjisArr: PropTypes.array,
  updateValueGlobal: PropTypes.func.isRequired,
};

MoonRabbit.defaultProps = {
  kanjisArr: [],
};

// == Export
export default MoonRabbit;
