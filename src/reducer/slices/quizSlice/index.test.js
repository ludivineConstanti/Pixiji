import '@testing-library/jest-dom';

import store from 'src/store';
import quizzes from 'src/assets/dataQuiz/quizzes';
import { updateIdQuiz, initializeQuiz, answeredQuestionQuiz } from './index';

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
  const state = store.getState();

  expect(state.quiz.currentQuizId).toBe(quizId);
  expect(state.quiz[`quiz${quizId}`].dataQuiz).toEqual(expect.any(Array));
  // There should be minimum one question in the quiz
  expect(state.quiz[`quiz${quizId}`].dataQuiz.length).toBeGreaterThan(0);

  state.quiz[`quiz${quizId}`].dataQuiz.forEach((arr) => {
    expect(arr).toEqual(expect.objectContaining({
      infosAnswer: expect.objectContaining({
        answerIndex: expect.any(Number),
        answeredRight: expect.any(Number),
        answeredWrong: expect.any(Number),
      }),
      arrAnswers: expect.arrayContaining([expect.objectContaining({
        id: expect.any(Number),
        kanji: expect.any(String),
        en: expect.any(String),
        kana: expect.any(String),
        kanaEn: expect.any(String),
        quizId,
      })]),
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
});

test('answered question quiz correctly', () => {
  const quizId = quizzes[0].id;

  store.dispatch(initializeQuiz({ quizId }));

  const stateInitial = store.getState();
  const cQInitial = stateInitial.quiz[`quiz${quizId}`];
  expect(cQInitial.dataQuiz[0].infosAnswer.answeredRight).toBe(0);
  const rALengthInitial = cQInitial.rightAnswers.length;

  const currentQuestion = stateInitial.quiz[`quiz${quizId}`].dataQuiz[0];
  const answer = currentQuestion.arrAnswers[currentQuestion.infosAnswer.answerIndex];

  // {quizId: num, answer: {answer: {id: num, kanji, en, kana, kanaEn}}}
  store.dispatch(answeredQuestionQuiz({ quizId, answer }));

  const state = store.getState();
  const cQ = state.quiz[`quiz${quizId}`];

  expect(cQ.answeredQuestion).toBe(answer.id);
  expect(cQ.dataQuiz[0].infosAnswer.answeredRight).toBe(1);
  expect(cQ.rightAnswers.length).toBe(rALengthInitial + 1);
  expect(cQ.rightAnswers[cQ.rightAnswers.length - 1])
    .toEqual({ answer, infosAnswer: cQ.dataQuiz[0].infosAnswer });
});

test.only('answered question quiz wrong', () => {});
/*
{quizId: num, answer: {answer: {id: num, kanji, en, kana, kanaEn}}}

state[`quiz${quizId}`].answeredQuestion = quizId;
state[`quiz${quizId}`].answeredCorrectly = false;
state[`quiz${quizId}`].infosAnswered.answeredRight = 0;
state[`quiz${quizId}`].rightAnswers.length = previous length
state[`quiz${quizId}`].infosAnswered.answeredRight = previous state + 1
*/
test.todo('next question quiz');
/*

state[`quiz${quizId}`].answeredQuestion = false;
state[`quiz${quizId}`].answeredCorrectly = false;

if state[`quiz${quizId}`].answeredCorrectly = true
state[`quiz${quizId}`].dataQuiz.length = previous length - 1

if state[`quiz${quizId}`].answeredCorrectly = false
state[`quiz${quizId}`].dataQuiz.length = previous length
first element of dataQuiz should not be the same as previous state
last element of dataQuiz should be first element of previous state

*/
test.todo('cheating button finish quiz');
/*

if state[`quiz${quizId}`].finished = false
state[`quiz${quizId}`].rightAnswers.length = state[`quiz${quizId}`].totalQuestions
* state[`quiz${quizId}`].rightAnswers is an array of objects
* each object has properties...
state[`quiz${quizId}`].finished = true

else
runs same tests as the initialise test

*/
