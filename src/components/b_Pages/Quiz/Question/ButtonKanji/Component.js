// == Import npm
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TweenMax, TimelineLite } from 'gsap';

// == Import
import './style.scss';

const ButtonKanji = ({
  possibleAnswer, disabled, colorMain, rightAnswer, updateValueQuiz, answeredCorrectlyQuiz,
}) => {
  const component = useRef(null);
  const tl = new TimelineLite({ paused: true });
  console.log('rendered button');
  return (
    <button
      ref={component}
      className="buttonKanji"
      type="button"
      onClick={() => {
        console.log(rightAnswer);
        if (rightAnswer.id === possibleAnswer.id) {
          answeredCorrectlyQuiz(rightAnswer);
        }
        else {
          updateValueQuiz({ obj: ['user'], prop: ['answeredQuestion'], value: [true] });
        }
      }}
      onMouseOver={() => {
        if (!disabled) {
          tl.to(component.current, 0.35, { ease: 'power1.inOut', scale: 1.2, boxShadow: '0 0 4px 10px rgba(0, 0, 0, 0.15)' }).play();
        }
      }}
      onMouseOut={() => {
        if (!disabled) {
          tl.to(component.current, 0.25, { ease: 'power1.out', scale: 1 }).play();
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
  disabled: PropTypes.bool.isRequired,
  colorMain: PropTypes.string.isRequired,
  rightAnswer: PropTypes.object.isRequired,
  updateValueQuiz: PropTypes.func.isRequired,
  answeredCorrectlyQuiz: PropTypes.func.isRequired,
};

// == Export
export default ButtonKanji;
