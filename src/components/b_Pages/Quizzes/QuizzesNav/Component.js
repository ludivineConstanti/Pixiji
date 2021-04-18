// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SSQuizzesNav, { SNavSquare } from './SQuizzesNav';

const QuizzesNav = ({ currentQuizId, quizzesData }) => {
  console.log(quizzesData);
  return (
    <SSQuizzesNav>
      {quizzesData.map((quiz) => (
        <SNavSquare
          to={`/quizzes/${quiz.slug}`}
          key={`navSquare${quiz.id}`}
          s={{ color: currentQuizId === quiz.id ? '#FFF' : 'none' }}
        />
      ))}
    </SSQuizzesNav>
  );
};

QuizzesNav.propTypes = {
  currentQuizId: PropTypes.number.isRequired,
  quizzesData: PropTypes.array.isRequired,
};

// == Export
export default QuizzesNav;
