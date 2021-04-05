// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ButtonKanji from '../ButtonKanji';
import SQuestion from './SQuestion';

const Question = ({
  dataObj, answeredQuestion, updateFirstQuestionQuiz,
}) => {
  const { infosAnswer, arrAnswers } = dataObj;
  let rightAnswerIndex;
  if (!infosAnswer.answerIndex) {
    rightAnswerIndex = Math.floor(Math.random() * arrAnswers.length);
    updateFirstQuestionQuiz({ prop: ['answerIndex'], value: [rightAnswerIndex] });
  }
  else rightAnswerIndex = infosAnswer.answerIndex;
  return (
    <SQuestion className="question">
      <h2 className="question__text">Which character means {arrAnswers[rightAnswerIndex].en}?</h2>
      <div className="question__options">
        {// eslint-disable-next-line max-len
        arrAnswers.map((e) => <ButtonKanji key={e.id} possibleAnswer={e} disabled={answeredQuestion} />)
}
      </div>
    </SQuestion>
  );
};

Question.propTypes = {
  dataObj: PropTypes.object.isRequired,
  answeredQuestion: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  updateFirstQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default Question;
