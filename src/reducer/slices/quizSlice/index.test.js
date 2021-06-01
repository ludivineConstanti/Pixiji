import '@testing-library/jest-dom';

import store from 'src/store';
import quizzes from 'src/assets/dataQuiz/quizzes';
import {
  updateIdQuiz, initializeQuiz, nextQuestionQuiz, cheatingButtonFinishQuiz, resetStateQuiz,
} from './index';
import {
  answerQuestion, answerTemplate, infosAnswerTemplate, testInitializeQuiz, returnCurrentQuiz,
} from './helpersTest';

afterEach(() => {
  store.dispatch(resetStateQuiz());
});

test('updateIdQuiz', () => {
  // takes { quizId, slug} as argument
  quizzes.forEach((quiz) => {
    store.dispatch(updateIdQuiz({ quizId: quiz.id, slug: quiz.slug }));
    const state = store.getState();
    expect(state.quiz.currentQuizId).toBe(quiz.id);
    expect(state.quiz.currentSlug).toBe(quiz.slug);
  });
});

test('initializeQuiz', () => {
  // takes { quizId } as a argument
  const quizId = quizzes[0].id;

  store.dispatch(initializeQuiz({ quizId }));

  testInitializeQuiz(quizId);
});

test('answered question quiz correctly', () => {
  const { quizId, answer, rALengthInitial } = answerQuestion('right');

  const cQ = returnCurrentQuiz(quizId);

  expect(cQ.answeredQuestion).toBe(answer.id);
  expect(cQ.dataQuiz[0].infosAnswer.answeredRight).toBe(1);
  expect(cQ.rightAnswers.length).toBe(rALengthInitial + 1);
  expect(cQ.rightAnswers[cQ.rightAnswers.length - 1])
    .toEqual({ answer, infosAnswer: cQ.dataQuiz[0].infosAnswer });
});

test('answered question quiz wrong', () => {
  const { quizId, rALengthInitial, answer } = answerQuestion('wrong');

  const cQ = returnCurrentQuiz(quizId);

  expect(cQ.answeredQuestion).toBe(answer.id);
  expect(cQ.answeredCorrectly).toBe(false);
  expect(cQ.dataQuiz[0].infosAnswer.answeredRight).toBe(0);
  expect(cQ.rightAnswers.length).toBe(rALengthInitial);
});

test('next question quiz answered right', () => {
  const { quizId } = answerQuestion('right');

  const cQInitial = returnCurrentQuiz(quizId);

  // { quizId }
  store.dispatch(nextQuestionQuiz({ quizId }));

  const cQ = returnCurrentQuiz(quizId);

  expect(cQ.answeredQuestion).toBe(false);
  expect(cQ.answeredCorrectly).toBe(false);
  expect(cQ.dataQuiz.length).toBe(cQInitial.dataQuiz.length - 1);
});

test('next question quiz answered wrong', () => {
  const { quizId } = answerQuestion('wrong');
  const cQInitial = returnCurrentQuiz(quizId);

  store.dispatch(nextQuestionQuiz({ quizId }));
  const cQ = returnCurrentQuiz(quizId);

  expect(cQ.answeredQuestion).toBe(false);
  expect(cQ.answeredCorrectly).toBe(false);
  // There should still be the same amount of question
  expect(cQ.dataQuiz.length).toBe(cQInitial.dataQuiz.length);
  // It's just pushed at the back of the array
  expect(cQ.dataQuiz[0].arrAnswers).not.toEqual(cQInitial.dataQuiz[0].arrAnswers);
  expect(cQ.dataQuiz[cQ.dataQuiz.length - 1].arrAnswers).toEqual(cQInitial.dataQuiz[0].arrAnswers);
});

test('cheating button finish quiz', () => {
  const quizId = quizzes[0].id;
  // { quizId }
  store.dispatch(initializeQuiz({ quizId }));
  store.dispatch(cheatingButtonFinishQuiz({ quizId }));

  const cQFinished = returnCurrentQuiz(quizId);

  expect(cQFinished.finished).toBe(true);
  expect(cQFinished.rightAnswers.length).toBe(cQFinished.totalQuestions);
  expect(cQFinished.rightAnswers.length).toBeGreaterThan(0);
  expect(cQFinished.rightAnswers).toEqual(expect.arrayContaining([expect.objectContaining({
    answer: answerTemplate(quizId),
    infosAnswer: infosAnswerTemplate,
  })]));

  store.dispatch(cheatingButtonFinishQuiz({ quizId }));

  testInitializeQuiz(quizId);
});

/*

* state[`quiz${quizId}`].rightAnswers is an array of objects
* each object has properties...

*/
