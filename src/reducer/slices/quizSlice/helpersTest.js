import '@testing-library/jest-dom';

import store from 'src/store';
import quizzes from 'src/assets/dataQuiz/quizzes';
import { initializeQuiz, answeredQuestionQuiz } from './index';

export const returnCurrentQuiz = (quizId) => {
  const state = store.getState();
  return state.quiz[`quiz${quizId}`];
};

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

export const infosAnswerTemplate = expect.objectContaining({
  answerIndex: expect.any(Number),
  answeredRight: expect.any(Number),
  answeredWrong: expect.any(Number),
});

export const answerTemplate = (quizId) => (
  expect.objectContaining({
    id: expect.any(Number),
    kanji: expect.any(String),
    en: expect.any(String),
    kana: expect.any(String),
    kanaEn: expect.any(String),
    quizId,
  })
);

export const testInitializeQuiz = (quizId) => {
  const state = store.getState();

  expect(state.quiz.currentQuizId).toBe(quizId);
  expect(state.quiz[`quiz${quizId}`].dataQuiz).toEqual(expect.any(Array));
  // There should be minimum one question in the quiz
  expect(state.quiz[`quiz${quizId}`].dataQuiz.length).toBeGreaterThan(0);

  state.quiz[`quiz${quizId}`].dataQuiz.forEach((arr) => {
    expect(arr).toEqual(expect.objectContaining({
      infosAnswer: infosAnswerTemplate,
      arrAnswers: expect.arrayContaining([answerTemplate(quizId)]),
    }));
    // minimum 2 answers (1 wrong, 1 right)
    expect(arr.arrAnswers.length).toBeGreaterThan(1);
    // answer index is useless if it refers to an answer that is not in the array
    expect(arr.infosAnswer.answerIndex).toBeGreaterThanOrEqual(0);
    expect(arr.infosAnswer.answerIndex).toBeLessThan(arr.arrAnswers.length);
  });

  expect(state.quiz[`quiz${quizId}`].totalQuestions).toBe(state.quiz[`quiz${quizId}`].dataQuiz.length);

  // checks the number of total kanjis (possible answers)
  // corresponds to what is written in the state
  const arrAnswersLength = state.quiz[`quiz${quizId}`].dataQuiz.map((arr) => (
    arr.arrAnswers.length
  ));
  const numTotalOptions = arrAnswersLength.reduce((a, b) => a + b);
  expect(state.quiz[`quiz${quizId}`].totalOptions).toBe(numTotalOptions);

  expect(state.quiz[`quiz${quizId}`].title).toBe(quizzes[quizId - 1].title);
  expect(state.quiz[`quiz${quizId}`].finished).toBe(false);
  expect(state.quiz[`quiz${quizId}`].answeredCorrectly).toBe(false);
  expect(state.quiz[`quiz${quizId}`].rightAnswers).toEqual([]);
  expect(state.quiz[`quiz${quizId}`].wrongAnswers).toEqual(expect.any(Array));
};
