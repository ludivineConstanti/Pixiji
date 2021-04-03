// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import MoonRabbit from 'src/components/d_Illustrations/MoonRabbit';
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Header from './Header';
import Question from './Question';

const Quiz = ({
  answeredQuestion, answeredCorrectly, finishedQuiz, nextQuestionQuiz,
}) => (
  <div className="quiz">
    <Header />
    { finishedQuiz ? (
      <TextWithTitle
        title="Well done!"
        text={['You answed all the questions correctly!', 'Try putting your mouse over the squares, on the right, to look at the answers again.']}
      />
    )
      : (
        <>
          <Question />
          <ButtonBig comment={answeredCorrectly ? 'correct!' : 'wrong!'} text="next" onClick={nextQuestionQuiz} show={!!answeredQuestion} />
        </>
      )}
    <MoonRabbit />

  </div>
);

Quiz.propTypes = {
  answeredQuestion: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  answeredCorrectly: PropTypes.bool.isRequired,
  finishedQuiz: PropTypes.bool.isRequired,
  nextQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default Quiz;
