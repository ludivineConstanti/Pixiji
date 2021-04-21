// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SIlluDecoOnGround from './SIlluDecoOnGround';

const IlluOnGround = ({
  color, side, margin, width, height, touchGround, isOnNum, kanjis,
}) => {
  const vIlluDecoOnGround = {
    initial: { scaleX: 0 },
    animateOn: { scaleX: 1 },
  };

  return (
    <SIlluDecoOnGround
      s={{
        color, side, margin, height, touchGround, width,
      }}
      variants={vIlluDecoOnGround}
      initial="initial"
      animate={isOnNum <= kanjis ? 'animateOn' : 'animateOff'}
      exit="initial"
    />
  );
};

IlluOnGround.propTypes = {
  color: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  margin: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  touchGround: PropTypes.bool,
  isOnNum: PropTypes.number.isRequired,
  kanjis: PropTypes.number.isRequired,
};

IlluOnGround.defaultProps = {
  touchGround: false,
};

// == Export
export default IlluOnGround;
