// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const ButtonBig = ({ text, colorMain }) => (
  <button className="buttonBig" type="button">
    <div style={{ color: `${colorMain}` }}>{text}</div>
  </button>
);

ButtonBig.propTypes = {
  text: PropTypes.string.isRequired,
  colorMain: PropTypes.string.isRequired,
};

// == Export
export default ButtonBig;
