// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// == Import
import '../style.scss';
import { zISquareHover } from 'src/styles/g';

const Square = ({
  size, columnStart, rowStart, color, kanjiIndex, kanjisArrLength,
}) => {
  // cC for classComponent
  const cC = 'square';

  const vSquare = {
    initial: { scale: 0 },
    animateOff: { scale: 0.2 },
    animateOn: { scale: 1 },
    whileHoverOff: {},
    whileHoverOn: { scale: 1.5, zIndex: zISquareHover },
  };

  return (
    <motion.div
      className={`${cC} ${cC}--size${size} ${cC}--columnStart${columnStart} ${cC}--rowStart${rowStart}`}
      style={{ backgroundColor: `${color}` }}
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
};

// == Export
export default Square;
