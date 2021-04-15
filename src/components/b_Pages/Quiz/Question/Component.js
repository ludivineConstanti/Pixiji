// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonKanji from '../ButtonKanji';
import SQuestion, { SText, SOptions } from './SQuestion';

const Question = ({
  quizId, dataObj, answeredQuestion, updateFirstQuestionQuiz,
}) => {
  if (!dataObj) return null;
  const { infosAnswer, arrAnswers } = dataObj;
  let rightAnswerIndex;
  if (!infosAnswer.answerIndex) {
    rightAnswerIndex = Math.floor(Math.random() * arrAnswers.length);
    updateFirstQuestionQuiz({ quizId, prop: ['answerIndex'], value: [rightAnswerIndex] });
  }
  else rightAnswerIndex = infosAnswer.answerIndex;
  return (
    <SQuestion>
      <SText>Which character means {arrAnswers[rightAnswerIndex].en}?</SText>
      <SOptions>
        {// eslint-disable-next-line max-len
        arrAnswers.map((e) => <ButtonKanji quizId={quizId} key={e.id} possibleAnswer={e} disabled={answeredQuestion} />)
}
      </SOptions>
    </SQuestion>
  );
};

Question.propTypes = {
  quizId: PropTypes.number.isRequired,
  dataObj: PropTypes.object.isRequired,
  answeredQuestion: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  updateFirstQuestionQuiz: PropTypes.func.isRequired,
};

// == Export
export default Question;
