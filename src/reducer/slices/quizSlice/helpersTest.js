import store from 'src/store';
import quizzes from 'src/assets/dataQuiz/quizzes';
import { initializeQuiz, answeredQuestionQuiz } from './index';

// eslint-disable-next-line import/prefer-default-export
export const answerQuestion = (answerCase) => {
  const quizId = quizzes[0].id;

  store.dispatch(initializeQuiz({ quizId }));

  const stateInitial = store.getState();
  const cQInitial = stateInitial.quiz[`quiz${quizId}`];
  expect(cQInitial.dataQuiz[0].infosAnswer.answeredRight).toBe(0);

  const currentQuestion = stateInitial.quiz[`quiz${quizId}`].dataQuiz[0];

  const rALengthInitial = cQInitial.rightAnswers.length;

  let answerIndex;
  if (answerCase === 'right') {
    answerIndex = currentQuestion.infosAnswer.answerIndex;
  }
  else {
    answerIndex = currentQuestion.infosAnswer.answerIndex - 1;
    if (answerIndex < 0) answerIndex = currentQuestion.infosAnswer.answerIndex + 1;
  }

  const answer = currentQuestion.arrAnswers[answerIndex];
  // {quizId: num, answer: {answer: {id: num, kanji, en, kana, kanaEn}}}
  store.dispatch(answeredQuestionQuiz({ quizId, answer }));

  return {
    quizId, rALengthInitial, answer,
  };
};
