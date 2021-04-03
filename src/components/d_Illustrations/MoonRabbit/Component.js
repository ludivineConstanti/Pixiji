// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';
import { squaresShrink, squaresGrow } from 'src/components/d_Illustrations/_helpers/transitions';
import createIllustration from 'src/components/d_Illustrations/_helpers/createIllustration';
import planet from './_data/planet';
import rabbit from './_data/rabbit';
import moon from './_data/moon';

const MoonRabbit = ({ kanjisArr, grownSquares, updateValueGlobal }) => {
  const cC = 'moonRabbit';
  // I use 2 groups to keep a reference for the divs
  // one for the first animation where they all get reduced at the same time
  // GSAP needs individual arrays to figure out where their center is
  // the other to animate every time I answer a question
  const squareMainRef = useRef({ planet: [], rabbit: [], moon: [] });
  const squareGroupRef = useRef([]);

  useEffect(() => {
    squaresShrink(squareMainRef.current.planet);
    squaresShrink(squareMainRef.current.rabbit);
    squaresShrink(squareMainRef.current.moon);
  }, []);

  useEffect(() => {
    let counter = grownSquares;
    while (kanjisArr.length > counter) {
      squaresGrow(squareGroupRef.current[counter]);
      counter += 1;
    }
    updateValueGlobal({ obj: 'current', prop: ['grownSquares'], value: [counter] });
  }, [kanjisArr]);

  // need the number at the end so that it doesn't always start from 0
  // while pushing the groups in the squareContainer array
  let beginAtIndex = 0;
  const planetFormatted = createIllustration(planet, 'planet', squareMainRef, squareGroupRef, beginAtIndex);
  beginAtIndex += planet.length;
  const rabbitFormatted = createIllustration(rabbit, 'rabbit', squareMainRef, squareGroupRef, beginAtIndex);
  beginAtIndex += rabbit.length;
  const moonFormatted = createIllustration(moon, 'moon', squareMainRef, squareGroupRef, beginAtIndex);
  return (
    <>
      <div className={`${cC}__planet`}>
        {planetFormatted}
      </div>
      <div className={`${cC}__rabbitOnMoon`}>
        <div className={`${cC}__rabbit`}>
          {rabbitFormatted}
        </div>
        <div className={`${cC}__moon`}>
          {moonFormatted}
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
