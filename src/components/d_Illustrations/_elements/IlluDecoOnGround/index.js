// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { squareUnit } from 'src/styles/g';
import SIlluDecoOnGround from './SIlluDecoOnGround';

const IlluOnGround = ({
  color, side, margin, width, height, touchGround, isOnNum, kanjisArr,
}) => {
  const vIlluDecoOnGround = {
    initial: { width: 0 },
    animateOn: { width: `calc(${squareUnit} * ${width})` },
    animateOff: {},
  };

  return (
    <SIlluDecoOnGround
      s={{
        color, side, margin, height, touchGround,
      }}
      variants={vIlluDecoOnGround}
      initial="initial"
      animate={isOnNum <= kanjisArr.length ? 'animateOn' : 'animateOff'}
      exit="initial"
    />
  );
};

IlluOnGround.propTypes = {
  color: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  margin: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  touchGround: PropTypes.bool,
  isOnNum: PropTypes.number.isRequired,
  kanjisArr: PropTypes.array.isRequired,
};

IlluOnGround.defaultProps = {
  touchGround: false,
};

// == Export
export default IlluOnGround;
