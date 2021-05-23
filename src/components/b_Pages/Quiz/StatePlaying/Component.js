// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import Question from '../Question';

const StatePlaying = ({
  answeredQuestion, answeredCorrectly, currentQuizId, nextQuestionQuiz,
}) => (
  <>
    <Question quizId={currentQuizId} />
    {!!answeredQuestion && (
    <ButtonBig
      comment={answeredCorrectly ? 'correct!' : 'wrong!'}
      text="next"
      onClick={() => {
        nextQuestionQuiz({ quizId: currentQuizId });
      }}
    />
    )}
  </>
);

StatePlaying.propTypes = {
  answeredQuestion: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  answeredCorrectly: PropTypes.bool.isRequired,
  currentQuizId: PropTypes.number.isRequired,
  nextQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default StatePlaying;
