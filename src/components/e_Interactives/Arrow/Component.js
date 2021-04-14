// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { SArrow, SStroke, SEnd } from './SArrow';

const Arrow = ({
  pointsToward, colorMain, isWhite,
}) => (
  <SArrow s={{ pointsToward }}>
    <SStroke s={{ colorMain: isWhite ? 'white' : colorMain }} />
    <SEnd s={{ colorMain: isWhite ? 'white' : colorMain, pointsToward }} />
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
