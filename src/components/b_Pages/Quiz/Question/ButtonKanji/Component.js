// == Import npm
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';

const ButtonKanji = ({
  possibleAnswer, disabled, colorMain, correctAnswer, cheating, answeredQuestionQuiz,
}) => {
  const componentRef = useRef(null);
  const cC = 'buttonKanji';
  const tl = gsap.timeline({ paused: true });
  const colorMainRgb = gsap.utils.splitColor(colorMain);

  if (disabled) {
    tl.to(componentRef.current, 0.35, {
      ease: 'power1.inOut', borderColor: 'rgba(255, 255, 255, 0.25)', color: 'rgba(255, 255, 255, 0.25)', scale: 0.8,
    }).play();
  }

  const styleRightAnswer = { backgroundColor: `rgba(${colorMainRgb[0]}, ${colorMainRgb[1]}, ${colorMainRgb[2]}, 0.8)` };
  const styleWrongAnswer = { ...styleRightAnswer, borderColor: 'rgba(255, 255, 255, 0.4)', color: 'rgba(255, 255, 255, 0.4)' };

  return (
    <button
      ref={componentRef}
      className={cC}
      type="button"
      onClick={() => {
        answeredQuestionQuiz({ answer: possibleAnswer });
      }}
      onMouseOver={() => {
        if (!disabled) {
          tl.to(componentRef.current, 0.35, { ease: 'power1.inOut', scale: 1.2, boxShadow: `0 0 4px 8px rgba(${colorMainRgb[0] - 10}, ${colorMainRgb[1] - 10}, ${colorMainRgb[2] - 10}, 0.35)` }).play();
        }
      }}
      onMouseOut={() => {
        tl.to(componentRef.current, 0.25, { ease: 'power1.out', scale: 1, boxShadow: 'none' }).play();
      }}
      disabled={disabled}
      style={
        possibleAnswer.id !== correctAnswer.id && cheating ? styleWrongAnswer : styleRightAnswer
      }
    >
      {possibleAnswer.kanji}
    </button>
  );
};

ButtonKanji.propTypes = {
  possibleAnswer: PropTypes.object.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  colorMain: PropTypes.string.isRequired,
  correctAnswer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  cheating: PropTypes.bool.isRequired,
  answeredQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default ButtonKanji;
