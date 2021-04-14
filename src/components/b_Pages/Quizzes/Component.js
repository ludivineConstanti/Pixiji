// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Illu from 'src/components/d_Illustrations/Illu';

const Quizzes = ({ currentQuiz, dataQuizzes }) => {
  const previousQuiz = dataQuizzes.filter((quiz) => quiz.id === currentQuiz.id - 1);
  const nextQuiz = dataQuizzes.filter((quiz) => quiz.id === currentQuiz.id + 1);
  return (
    <>
      <Illu useCase="quiz" index={currentQuiz.id - 1} animationCase="quizPreview" />
      <div>
        <TextWithTitle
          title={`Quiz ${currentQuiz.id}`}
          text={[`This quiz contains the 80 kanjis that are taught in the ${currentQuiz.title}, in Japan.`]}
          button={{ text: 'start', path: `quiz/${currentQuiz.slug}` }}
        />
        {previousQuiz.length ? <ButtonBig text={`Quiz ${previousQuiz[0].id}`} arrowDirection="left" show path={`/quizzes/${previousQuiz[0].slug}`} /> : ''}
        {nextQuiz.length ? <ButtonBig text={`Quiz ${nextQuiz[0].id}`} side="right" show path={`/quizzes/${nextQuiz[0].slug}`} /> : ''}
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
};

// == Export
export default Quizzes;
