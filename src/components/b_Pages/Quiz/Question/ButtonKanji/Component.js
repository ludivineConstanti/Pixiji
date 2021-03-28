// == Import npm
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap, TimelineLite } from 'gsap';

// == Import
import './style.scss';

const ButtonKanji = ({
  possibleAnswer, disabled, colorMain, rightAnswer, updateValueQuiz, answeredQuestionQuiz,
}) => {
  const component = useRef(null);
  const cC = 'buttonKanji';
  const tl = new TimelineLite({ paused: true });
  const colorMainRgb = gsap.utils.splitColor(colorMain);

  if (disabled) {
    tl.to(component.current, 0.35, {
      ease: 'power1.inOut', borderColor: 'rgba(255, 255, 255, 0.25)', color: 'rgba(255, 255, 255, 0.25)', scale: 0.8,
    }).play();
  }

  return (
    <button
      ref={component}
      className={cC}
      type="button"
      onClick={() => {
        answeredQuestionQuiz({ answer: possibleAnswer });
      }}
      onMouseOver={() => {
        if (!disabled) {
          tl.to(component.current, 0.35, { ease: 'power1.inOut', scale: 1.2, boxShadow: `0 0 4px 8px rgba(${colorMainRgb[0] - 10}, ${colorMainRgb[1] - 10}, ${colorMainRgb[2] - 10}, 0.35)` }).play();
        }
      }}
      onMouseOut={() => {
        tl.to(component.current, 0.25, { ease: 'power1.out', scale: 1, boxShadow: 'none' }).play();
      }}
      disabled={disabled}
      style={{ backgroundColor: `rgba(${colorMainRgb[0]}, ${colorMainRgb[1]}, ${colorMainRgb[2]}, 0.8)` }}
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
  answeredQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default ButtonKanji;
