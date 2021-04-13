// == Import npm
import React, { useEffect } from 'react';
import {
  useRouteMatch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Illu from 'src/components/d_Illustrations/Illu';
import Header from './Header';
import Question from './Question';

const Quiz = ({
  answeredQuestion,
  answeredCorrectly,
  finishedQuiz,
  kanjisArr,
  initializeQuiz,
  nextQuestionQuiz,
  currentQuiz,
}) => {
  useEffect(() => {
    initializeQuiz({ quizId: currentQuiz.id, title: currentQuiz.title });
  }, []);
  return (
    <>
      <Illu useCase="quiz" index={currentQuiz.id - 1} animationCase="quiz" kanjisArr={kanjisArr} />
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
      </div>
    </>
  );
};

Quiz.propTypes = {
  answeredQuestion: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  answeredCorrectly: PropTypes.bool.isRequired,
  finishedQuiz: PropTypes.bool.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  currentQuiz: PropTypes.object.isRequired,
  initializeQuiz: PropTypes.func.isRequired,
  nextQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default Quiz;
