// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const ButtonKanji = ({ possibleAnswer, colorMain, updateValueQuiz }) => (
  <button
    className="buttonKanji"
    type="button"
    onClick={() => {
      updateValueQuiz('user', 'answer', possibleAnswer.kanji);
    }}
  >
    {possibleAnswer.kanji}
  </button>
);

ButtonKanji.propTypes = {
  possibleAnswer: PropTypes.object.isRequired,
  colorMain: PropTypes.string.isRequired,
  updateValueQuiz: PropTypes.func.isRequired,
};

// == Export
export default ButtonKanji;
