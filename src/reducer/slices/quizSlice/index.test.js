import '@testing-library/jest-dom';

import store from 'src/store';
import quizzes from 'src/assets/dataQuiz/quizzes';
import { array } from 'prop-types';
import { updateIdQuiz, initializeQuiz } from './index';

test('update quiz id', () => {
  // takes { quizId, slug} as argument
  quizzes.forEach((quiz) => {
    store.dispatch(updateIdQuiz({ quizId: quiz.id, slug: quiz.slug }));
    const state = store.getState();
    expect(state.quiz.currentQuizId).toBe(quiz.id);
    expect(state.quiz.currentSlug).toBe(quiz.slug);
  });
});

test.only('initialize', () => {
  // takes { quizId } as a argument
  const quizId = quizzes[0].id;

  store.dispatch(initializeQuiz({ quizId }));
  const state = store.getState();

  expect(state.quiz.currentQuizId).toBe(quizId);
  expect(state.quiz[`quiz${quizId}`].dataQuiz).toEqual(expect.any(Array));
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
  });
});
/*

state[`quiz${quizId}`].dataQuiz
* is an array
* contains arrays
* each subarrays has a minimum length of 2
* each subarray has an infosAnswer property with an answerIndex between 0 and arr.length - 1

state[`quiz${quizId}`].totalQuestions = state[`quiz${quizId}`].formattedQuiz.length
state[`quiz${quizId}`].totalOptions
= sum of length of subarrays in state[`quiz${quizId}`].formattedQuiz
state[`quiz${quizId}`].title = quizzes[quizId - 1].title
state[`quiz${quizId}`].finished = false
state[`quiz${quizId}`].answeredQuestion = false
state[`quiz${quizId}`].answeredCorrectly = false
state[`quiz${quizId}`].rightAnswers = [];
state[`quiz${quizId}`].wrongAnswers
* is an array
*/
test.todo('answered question quiz correctly');
/*
{quizId: num, answer: {answer: {id: num, kanji, en, kana, kanaEn}}}

state[`quiz${quizId}`].answeredQuestion = quizId;
state[`quiz${quizId}`].answeredCorrectly = true;
state[`quiz${quizId}`].infosAnswered.answeredRight = 1
state[`quiz${quizId}`].rightAnswers.length = previous length + 1
last element of the rightAnswer array is the current answer

if total question = total correct answers state[`quiz${quizId}`].finished = true

*/

test.todo('answered question quiz wrong');
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
