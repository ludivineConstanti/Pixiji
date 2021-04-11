// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { SArrow, SStroke, SEnd } from './SArrow';

const Arrow = ({
  pointsToward, colorMain, isWhite,
}) => (
  <SArrow>
    <SStroke colorMain={isWhite ? 'white' : colorMain} />
    <SEnd colorMain={isWhite ? 'white' : colorMain} />
  </SArrow>
);

Arrow.propTypes = {
  pointsToward: PropTypes.string,
  colorMain: PropTypes.string.isRequired,
  isWhite: PropTypes.bool,
};

Arrow.defaultProps = {
  pointsToward: 'right',
  isWhite: false,
};

// == Export
export default Arrow;
