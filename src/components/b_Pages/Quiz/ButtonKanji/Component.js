// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import { strokeWidth } from 'src/styles/g';
import SButtonKanji from './SButtonKanji';

const ButtonKanji = ({
  quizId, possibleAnswer, disabled,
  colorMain, colorMainD1, correctAnswer, cheating, answeredQuestionQuiz,
}) => {
  const [wasClicked, setWasClicked] = useState(false);

  const [vButtonKanji, setVButtonKanji] = useState({
    initial: { scaleX: 0, x: 150 },
    animate: { scaleX: 1, x: 0 },
    exit: { scaleX: 0, x: -150 },
    whileHoverOn: { scale: 1.25, backgroundColor: colorMainD1 },
  });

  useEffect(() => {
    setVButtonKanji({
      ...vButtonKanji,
      // eslint-disable-next-line no-nested-ternary
      animate: !wasClicked && possibleAnswer.id === correctAnswer.id && cheating
        ? { ...vButtonKanji.animate, scale: 0.6, border: `${strokeWidth} solid rgba(255, 255, 255, 1)` }
        // eslint-disable-next-line no-nested-ternary
        : wasClicked && possibleAnswer.id === correctAnswer.id
          ? { ...vButtonKanji.animate, scale: 1, border: `calc(${strokeWidth} * 2) solid rgba(255, 255, 255, 1)` }
          : wasClicked
            ? { ...vButtonKanji.animate, scale: 1, border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)` }
            : { ...vButtonKanji.animate, scale: 0.6, border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)` },
    });
    if (!disabled) {
      setWasClicked(false);
    }
  }, [disabled]);

  useEffect(() => {
    setVButtonKanji({
      ...vButtonKanji,
      whileHoverOn: { ...vButtonKanji.whileHoverOn, backgroundColor: colorMainD1 },
    });
  }, [colorMainD1]);

  return (
    <SButtonKanji
      type="button"
      onClick={() => {
        answeredQuestionQuiz({ quizId, answer: possibleAnswer });
        setWasClicked(true);
      }}
      disabled={disabled}
      s={{ colorMain, isWrong: possibleAnswer.id !== correctAnswer.id && cheating, cheating }}
      variants={vButtonKanji}
      initial="initial"
      animate="animate"
      exit="initial"
      whileHover={disabled ? 'whileHoverOff' : 'whileHoverOn'}
    >
      {possibleAnswer.kanji}
    </SButtonKanji>
  );
};

ButtonKanji.propTypes = {
  quizId: PropTypes.number.isRequired,
  possibleAnswer: PropTypes.object.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  colorMain: PropTypes.string.isRequired,
  colorMainD1: PropTypes.string.isRequired,
  correctAnswer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  cheating: PropTypes.bool.isRequired,
  answeredQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default ButtonKanji;
