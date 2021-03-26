// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ButtonKanji from './ButtonKanji';

const Question = ({ data, updateValueQuiz }) => {
  const rightAnswerIndex = Math.floor(Math.random() * data.length);
  updateValueQuiz('current', 'rightAnswer', data[rightAnswerIndex]);

  return (
    <main className="question">
      <h2 className="question__text">Which character means {data[rightAnswerIndex].en}?</h2>
      <div className="question__options">
        {data.map((e) => <ButtonKanji key={e.id} possibleAnswer={e} />)}
      </div>
    </main>
  );
};

Question.propTypes = {
  data: PropTypes.array.isRequired,
  updateValueQuiz: PropTypes.func.isRequired,
};

// == Export
export default Question;
