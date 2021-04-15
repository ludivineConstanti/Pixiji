// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Illu from 'src/components/d_Illustrations/Illu';
import SQuiz from './SQuiz';
import Header from './Header';
import Question from './Question';

const Quiz = ({
  answeredQuestion, answeredCorrectly, finishedQuiz, kanjisArr, currentQuiz,
  dataQuizzes,
  nextQuestionQuiz, restartQuiz,
}) => {
  const nextQuiz = dataQuizzes.filter((quiz) => quiz.id === currentQuiz.id + 1);
  return (
    <>
      <Illu useCase="quiz" index={currentQuiz.id - 1} animationCase="quiz" kanjisArr={kanjisArr} />
      <SQuiz>
        <Header />
        { finishedQuiz ? (
          <>
            <TextWithTitle
              title="Well done!"
              text={['You answed all the questions correctly!', 'Try putting your mouse over the squares, on the right, to look at the answers again.']}
            />
            <ButtonBig
              text="Replay"
              onClick={() => {
                restartQuiz({ quizId: currentQuiz.id, title: currentQuiz.title });
              }}
              show
            />
            {nextQuiz.length ? <ButtonBig text={`Quiz ${nextQuiz[0].id}`} side="right" path={`/quiz/${nextQuiz[0].slug}`} /> : ''}
          </>
        )
          : (
            <>
              <Question quizId={currentQuiz.id} />
              {!!answeredQuestion && (
              <ButtonBig
                comment={answeredCorrectly ? 'correct!' : 'wrong!'}
                text="next"
                onClick={() => {
                  nextQuestionQuiz({ quizId: currentQuiz.id });
                }}
              />
              )}
            </>
          )}
      </SQuiz>
    </>
  );
};

Quiz.propTypes = {
  answeredQuestion: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  answeredCorrectly: PropTypes.bool.isRequired,
  finishedQuiz: PropTypes.bool.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  currentQuiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  dataQuizzes: PropTypes.array.isRequired,
  nextQuestionQuiz: PropTypes.func.isRequired,
  restartQuiz: PropTypes.func.isRequired,
};

// == Export
export default Quiz;
