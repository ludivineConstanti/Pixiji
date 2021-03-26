// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const ButtonKanji = ({
  possibleAnswer, colorMain, rightAnswer, updateValueQuiz, answeredCorrectlyQuiz,
}) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <button
      className="buttonKanji"
      type="button"
      onClick={() => {
        setDisabled(true);
        if (rightAnswer.id === possibleAnswer.id) {
          answeredCorrectlyQuiz(rightAnswer);
        }
        else {
          updateValueQuiz('user', 'answeredQuestion', true);
        }
      }}
      disabled={disabled}
    >
      {possibleAnswer.kanji}
    </button>
  );
};

ButtonKanji.propTypes = {
  possibleAnswer: PropTypes.object.isRequired,
  colorMain: PropTypes.string.isRequired,
  rightAnswer: PropTypes.object.isRequired,
  updateValueQuiz: PropTypes.func.isRequired,
  answeredCorrectlyQuiz: PropTypes.func.isRequired,
};

// == Export
export default ButtonKanji;
