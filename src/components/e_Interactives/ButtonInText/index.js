// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Arrow from 'src/components/e_Interactives/Arrow';
import SButtonInText, { SText } from './SButtonInText';

const ButtonInText = ({
  text, path,
}) => (
  <SButtonInText to={`/${path}`}>
    <SText>{text}</SText>
    <Arrow isWhite />
  </SButtonInText>
);

ButtonInText.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// == Export
export default ButtonInText;
