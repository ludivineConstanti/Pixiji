// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';

const Quiz = ({
  currentQuizId, currentQuizTitle, dataQuizzes, restartQuiz,
}) => {
  const nextQuiz = dataQuizzes.filter((quiz) => quiz.id === currentQuizId + 1);
  return (
    <>
      <TextWithTitle
        title="Well done!"
        text={['You answed all the questions!', 'Try putting your mouse over the squares, on the right, to look at the answers again.']}
      />
      <ButtonBig
        text="Replay"
        onClick={() => {
          restartQuiz({ quizId: currentQuizId, title: currentQuizTitle });
        }}
      />
      {nextQuiz.length ? <ButtonBig text={`Quiz ${nextQuiz[0].id}`} side="right" path={`/quiz/${nextQuiz[0].slug}`} /> : ''}
    </>

  );
};

Quiz.propTypes = {
  currentQuizId: PropTypes.number.isRequired,
  currentQuizTitle: PropTypes.string.isRequired,
  dataQuizzes: PropTypes.array.isRequired,
  restartQuiz: PropTypes.func.isRequired,
};

// == Export
export default Quiz;
