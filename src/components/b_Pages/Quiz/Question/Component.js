// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonKanji from '../ButtonKanji';
import SQuestion, { SText, SOptions } from './SQuestion';

const Question = ({
  quizId, dataObj, answeredQuestion,
}) => {
  if (!dataObj) return null;
  const { infosAnswer, arrAnswers } = dataObj;
  return (
    <SQuestion>
      <SText>Which character means {arrAnswers[infosAnswer.answerIndex].en}?</SText>
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
};

// == Export
export default Question;
