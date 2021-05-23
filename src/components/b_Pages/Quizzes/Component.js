// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Illu from 'src/components/d_Illustrations/Illu';
import QuizzesNav from './QuizzesNav';

const Quizzes = ({
  currentQuiz, dataQuizzes, totalOptions, kanjisArr, updateIdQuiz,
}) => {
  const previousQuiz = dataQuizzes.filter((quiz) => quiz.id === currentQuiz.id - 1);
  const nextQuiz = dataQuizzes.filter((quiz) => quiz.id === currentQuiz.id + 1);

  const numFirstTry = kanjisArr.filter((answer) => answer.infosAnswer.answeredWrong === 0);
  const textFirstTry = numFirstTry.length > 0 ? `You answered ${numFirstTry.length} question${numFirstTry.length > 1 ? 's' : ''} correctly on your first try!` : '';
  const numWrongAnswers = kanjisArr.filter((answer) => answer.infosAnswer.answeredWrong > 0);
  const textWrongAnswers = numWrongAnswers.length > 0 ? `Hover the squares on the right to look at the ${numWrongAnswers.length} answer${numWrongAnswers.length > 1 ? 's' : ''} you got wrong.` : '';
  const textIntro = numFirstTry.length > 0 || numWrongAnswers.length > 0 ? '' : `This quiz contains the ${totalOptions} kanjis that are taught in the ${currentQuiz.title}, in Japan.`;
  useEffect(() => {
    updateIdQuiz({ quizId: currentQuiz.id, slug: currentQuiz.slug });
  }, []);
  return (
    <>
      <Illu useCase="quiz" index={currentQuiz.id - 1} kanjisArr={kanjisArr} />
      <div>
        <TextWithTitle
          title={`Quiz ${currentQuiz.id}`}
          text={
            [textIntro, textFirstTry, textWrongAnswers]
}
          button={{ text: kanjisArr.length > 0 ? 'Continue' : 'Start', path: `quiz/${currentQuiz.slug}` }}
        />
        <QuizzesNav
          currentQuizId={currentQuiz.id}
          prevQuiz={previousQuiz.length}
          nextQuiz={nextQuiz.length}
        />
        {previousQuiz.length ? <ButtonBig text={`Quiz ${previousQuiz[0].id}`} arrowDirection="left" path={`/quizzes/${previousQuiz[0].slug}`} /> : ''}
        {nextQuiz.length ? <ButtonBig text={`Quiz ${nextQuiz[0].id}`} side="right" path={`/quizzes/${nextQuiz[0].slug}`} /> : ''}
      </div>
    </>
  );
};

Quizzes.propTypes = {
  currentQuiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  dataQuizzes: PropTypes.array.isRequired,
  totalOptions: PropTypes.number.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  updateIdQuiz: PropTypes.func.isRequired,
};

// == Export
export default Quizzes;
