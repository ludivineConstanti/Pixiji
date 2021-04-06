// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import { squaresShrink, squaresGrow } from 'src/components/d_Illustrations/_helpers/transitions';
import createIllustration from 'src/components/d_Illustrations/_helpers/createIllustration';
import RabbitOnMoon from 'src/components/d_Illustrations/_compIllus/RabbitOnMoon';
import SnowMonkeys from 'src/components/d_Illustrations/_compIllus/SnowMonkeys';
import arrDataIllu from 'src/components/d_Illustrations/_data/indexQuiz';

const IlluQuiz = ({ kanjisArr, updateValueGlobal }) => {
  const { arrIllu, colorIllu } = arrDataIllu[0];
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
    updateValueGlobal({ obj: 'UI', prop: ['colorMain'], value: [colorIllu] });
    for (let i = 0; i < arrIllu.length; i += 1) {
      // squaresShrink(squareMainRef.current[i]);
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
      <SnowMonkeys arrIlluFormatted={arrIlluFormatted} />
    </>
  );
};

IlluQuiz.propTypes = {
  kanjisArr: PropTypes.array,
  updateValueGlobal: PropTypes.func.isRequired,
};

IlluQuiz.defaultProps = {
  kanjisArr: [],
};

// == Export
export default IlluQuiz;
