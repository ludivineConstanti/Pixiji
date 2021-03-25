// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const ButtonKanji = ({ kanji }) => (
  <button
    className="buttonKanji"
    type="button"
    onClick={() => {
      console.log(kanji);
    }}
  >
    {kanji}
  </button>
);

ButtonKanji.propTypes = {
  kanji: PropTypes.string.isRequired,
};

// == Export
export default ButtonKanji;
