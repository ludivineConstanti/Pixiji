// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SSquare from './SSquare';
import iVSquare from './animation';

const Square = ({
  size, columnStart, rowStart, color, kanjiIndex, kanjisArrLength,
}) => (
  <SSquare
    s={{
      color, size, columnStart, rowStart,
    }}
    variants={iVSquare}
    initial="initial"
    animate={kanjisArrLength > kanjiIndex ? 'animateOn' : 'animateOff'}
    whileHover={kanjisArrLength > kanjiIndex ? 'whileHoverOn' : 'whileHoverOff'}
    exit="initial"
  />
);

Square.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  kanjisArrLength: PropTypes.number.isRequired,
};

// == Export
export default Square;
