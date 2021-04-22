// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import { zISquareHover } from 'src/styles/g';
import { aWind } from 'src/components/d_Illustrations/_helpers/animation';
import SSquare from './SSquare';

const Square = ({
  size, columnStart, rowStart, color, kanjiIndex, kanjisArrLength, animationCase,
}) => {
  const [vSquare, setVSquare] = useState({
    initial: { scale: 0 },
    animateOff: { scale: 0.2 },
    animateOn: { scale: 1 },
    whileHoverOff: {},
    whileHoverOn: { scale: 1.5, zIndex: zISquareHover },
  });

  useEffect(() => {
    if (animationCase === 'wind' && kanjisArrLength > kanjiIndex) {
      aWind(setVSquare, vSquare, columnStart);
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
  animationCase: PropTypes.string,
};

Square.defaultProps = {
  animationCase: '',
};

// == Export
export default Square;
