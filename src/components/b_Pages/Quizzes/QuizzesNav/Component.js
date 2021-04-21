// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SSQuizzesNav, { SNavSquare } from './SQuizzesNav';

const QuizzesNav = ({
  prevQuiz, nextQuiz, currentQuizId, quizzesData,
}) => {
  const vNavSquare = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    whileHover: { scale: 1.25 },
  };
  return (
    <SSQuizzesNav s={{ prevQuiz, nextQuiz }}>
      {quizzesData.map((quiz) => (
        <SNavSquare
          to={`/quizzes/${quiz.slug}`}
          key={`navSquare${quiz.id}`}
          s={{ color: currentQuizId === quiz.id ? '#FFF' : 'none' }}
          variants={vNavSquare}
          whileHover="whileHover"
          initial="initial"
          animate="animate"
          exit="initial"
        />
      ))}
    </SSQuizzesNav>
  );
};

QuizzesNav.propTypes = {
  currentQuizId: PropTypes.number.isRequired,
  quizzesData: PropTypes.array.isRequired,
  prevQuiz: PropTypes.bool.isRequired,
  nextQuiz: PropTypes.bool.isRequired,
};

// == Export
export default QuizzesNav;
