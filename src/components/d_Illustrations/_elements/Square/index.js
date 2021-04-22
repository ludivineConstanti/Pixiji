// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import { zISquareHover } from 'src/styles/g';
import {
  aWind, aShine, aAnimateOff, aAnimateOn,
} from 'src/components/d_Illustrations/_helpers/animation';
import SSquare from './SSquare';

const Square = ({
  size, columnStart, rowStart, color, kanjiIndex, kanjisArrLength, animationCase,
}) => {
  const [vSquare, setVSquare] = useState({
    initial: { scale: 0 },
    animateOff: aAnimateOff(size),
    animateOn: aAnimateOn,
    whileHoverOff: {},
    whileHoverOn: { scale: 1.5, zIndex: zISquareHover },
  });

  useEffect(() => {
    if (kanjisArrLength > kanjiIndex) {
      if (animationCase.name === 'wind') {
        aWind(setVSquare, vSquare, columnStart);
      }
      if (animationCase.name === 'shine') {
        aShine(setVSquare, vSquare, color, animationCase.values[0], animationCase.values[1]);
      }
    }
  }, [kanjisArrLength]);

  return (
    <SSquare
      s={{
        color, size, columnStart, rowStart,
      }}
      variants={vSquare}
      initial="initial"
      animate={kanjisArrLength > kanjiIndex ? 'animateOn' : 'animateOff'}
      whileHover={kanjisArrLength > kanjiIndex ? 'whileHoverOn' : 'whileHoverOff'}
      exit="initial"
    />
  );
};

Square.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  kanjisArrLength: PropTypes.number.isRequired,
  animationCase: PropTypes.object,
};

Square.defaultProps = {
  animationCase: {},
};

// == Export
export default Square;
