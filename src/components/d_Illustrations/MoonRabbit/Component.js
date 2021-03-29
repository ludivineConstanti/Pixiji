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

const MoonRabbit = ({ kanjisArr, updateValueGlobal }) => {
  const cC = 'moonRabbit';
  // I use 2 groups to keep a reference for the divs
  // one for the first animation where they all get reduced at the same time
  // GSAP needs individual arrays to figure out where their center is
  // the other to animate every time I answer a question
  const squareGroups = useRef({ planet: [], rabbit: [], moon: [] });
  const squareContainers = useRef([]);

  useEffect(() => {
    // squaresShrink(squareGroups.current.planet);
    // squaresShrink(squareGroups.current.rabbit);
  }, []);

  useEffect(() => {
    squaresGrow(squareContainers.current[kanjisArr.length - 1]);
  }, [kanjisArr]);

  const planetFormatted = createIllustration(planet, 'planet', squareGroups, squareContainers);
  const rabbitFormatted = createIllustration(rabbit, 'rabbit', squareGroups, squareContainers, 4);
  const moonFormatted = createIllustration(moon, 'moon', squareGroups, squareContainers, 5);
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
