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
  answeredQuestion, answeredCorrectly, finishedQuiz, dataQuizzes, initializeQuiz, nextQuestionQuiz,
}) => {
  const match = useRouteMatch();
  const currentQuiz = dataQuizzes.filter((quiz) => quiz.slug === match.params.slug);
  if (!currentQuiz[0]) {
    return <Redirect to="quiz/404-not-found" />;
  }
  useEffect(() => {
    initializeQuiz({ quizId: currentQuiz[0].id, title: currentQuiz[0].title });
  }, [match]);
  return (
    <>
      <Illu useCase="quiz" index={currentQuiz[0].id - 1} animationCase="quiz" />
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
  dataQuizzes: PropTypes.array.isRequired,
  initializeQuiz: PropTypes.func.isRequired,
  nextQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default Quiz;
