import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import store from 'src/store';
import dataQuiz from 'src/assets/dataQuiz/quizzes';
import Quiz from './index';
import { lQuiz, lIllu } from 'src/assets/labels';

const returnRef = () => {
  return {
    question: screen.getByText(/Which character means/i),
    buttonNext: screen.queryByLabelText('next'),
    arrProgressSquare: screen.getAllByLabelText(lQuiz.progressSquare),
    arrButtonKanji: screen.getAllByLabelText(lQuiz.buttonKanji),
    arrMainSquare: screen.getAllByLabelText(lIllu.mainSquare),
  }
}

const renderQuiz = () => {
  render(<Provider store={store}><Quiz currentQuiz={dataQuiz[0]} /></Provider>);
  return returnRef();
};

const answerQuestion = () => {
  const ref = returnRef();
  userEvent.click(ref.arrButtonKanji[0]);
  return returnRef();
};

const pushNext = () => {
  const ref = returnRef();
  userEvent.click(ref.buttonNext);
  return returnRef();
};

test('Quiz initial state', () => {

  const ref = renderQuiz();
  
  // TEST THE ELEMENTS ARE THERE
  expect(ref.question).toBeTruthy();
  // Minimum number of questions is 1
  expect(ref.arrProgressSquare.length).toBeGreaterThan(0);
  // It doesn't make sense to have 0 or 1 possible answers to a question
  expect(ref.arrButtonKanji.length).toBeGreaterThan(1);
  expect(ref.arrMainSquare.length).toBeGreaterThan(1);
  // The button to go to the next question should not be there, before the user clicked on an answer
  expect(ref.buttonNext).toBeNull();
  
  // MORE PRECISE TESTS FOR THE ELEMENTS
  // The main squares show the answers of the quiz, once the user answered correctly
  // So there should be as many main square in the illustrations as there is questions in the quiz
  expect(ref.arrProgressSquare.length).toEqual(ref.arrMainSquare.length);
  // the button that let you choose the answers should not be disabled
  ref.arrButtonKanji.forEach(button => expect(button).not.toBeDisabled());

  // TEST CSS
  // We are at the beginning of the quiz, so the first square of the progress bar should look different from the others
  expect(Object.is(
    JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[0])), 
    JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[1]))))
    .not.toBe(true);
    // The rest of the squares should be identical
  for(let i = 1 ; i < ref.arrProgressSquare.length - 1; i += 1) {
    expect(Object.is(
      JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[i])), 
      JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[i + 1]))))
      .toBe(true);
  }

});

test('Quiz state after clicking on one answer', () => {
  renderQuiz();
  const ref = answerQuestion();

  // The button to go to the next question should now be displayed
  expect(ref.buttonNext).toBeTruthy();

  // Now that we answered the question, the answer buttons should not be clickable anymore
  ref.arrButtonKanji.forEach(button => expect(button).toBeDisabled());

})

test('Comparison before and after clicking on one answer and on the next button', () => {

  let ref = renderQuiz();

  const tQuestionS1 = ref.question.textContent;
  const tArrButtonKanjiS1 = ref.arrButtonKanji.map(button => button.textContent);

  ref = answerQuestion();

  // The question should not change when the user clicks on an answer
  const tQuestionS2 = ref.question.textContent;
  expect(tQuestionS2).toBe(tQuestionS1);
  // The answers should not change when the user clicks on an answer
  const tArrButtonKanjiS2 = ref.arrButtonKanji.map(button => button.textContent);
  expect(tArrButtonKanjiS2).toStrictEqual(tArrButtonKanjiS1);

  ref = pushNext();

  // The question content should change when the user clicks on the next button
  // only exception would be if there is only one question and the user answered wrong
  // then it keeps asking the same question until the user answers right
  const tQuestionS3 = ref.question.textContent;
  expect(tQuestionS3).not.toBe(tQuestionS2);
  // Once again, answers have should have the same behavior as question and change
  const tArrButtonKanjiS3 = ref.arrButtonKanji.map(button => button.textContent);
  expect(tArrButtonKanjiS3).not.toStrictEqual(tArrButtonKanjiS2);

});

// window.getComputedStyle()
