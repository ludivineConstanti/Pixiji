import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import store from 'src/store';
import dataQuiz from 'src/assets/dataQuiz/quizzes';
import Quiz from './index';
import { lQuiz, lIllu } from 'src/assets/labels';

let ref;

beforeEach(() => {
  render(<Provider store={store}><Quiz currentQuiz={dataQuiz[0]} /></Provider>);
  ref = {
    question: screen.getByLabelText('question'),
    nextButton: screen.queryByText(/next/i),
    arrProgressSquare: screen.getAllByLabelText(lQuiz.progressSquare),
    arrButtonKanji: screen.getAllByLabelText(lQuiz.buttonKanji),
    arrMainSquare: screen.getAllByLabelText(lIllu.mainSquare),
  }
});

//screen.debug(null, Infinity);
describe('Quiz initial state', () => {
  
  test('Test that the required elements are there', () => {
    expect(ref.question).toBeDefined();
    // Minimum number of questions is 1
    expect(ref.arrProgressSquare.length).toBeGreaterThan(0);
    // It doesn't make sense to have 0 or 1 possible answers to a question
    expect(ref.arrButtonKanji.length).toBeGreaterThan(1);
    expect(ref.arrMainSquare.length).toBeGreaterThan(1);
    // The button to go to the next question should not be there, before the user clicked on an answer
    expect(ref.nextButton).toBeNull();
  });

  test('Test more precise requirements for the elements', () => {
    // The main squares show the answers of the quiz, once the user answered correctly
    // So there should be as many main square in the illustrations as there is questions in the quiz
    expect(ref.arrProgressSquare.length).toEqual(ref.arrMainSquare.length);
    // the button that let you choose the answers should not be disabled
    ref.arrButtonKanji.forEach(button => expect(button).not.toBeDisabled());
  });

  test('Test CSS', () => {
    // We are at the beginning of the quiz, so the first square of the progress bar should look different from the others
    expect(Object.is(
      JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[0])), 
      JSON.stringify(window.getComputedStyle(ref.arrProgressSquare[1]))))
      .not.toBe(true);
  });

});

describe('Quiz state after clicking on one answer', () => {
  beforeEach(() => {
    userEvent.click(ref.arrButtonKanji[0]);
  });
  test('Verify that the required elements are there', () => {
    // The button to go to the next question should now be displayed
    expect(ref.nextButton).toBeDefined();
  });
  test('Verify more precise requirements for the elements', () => {
    // Now that we answered the question, the answer buttons should not be clickable anymore
    ref.arrButtonKanji.forEach(button => expect(button).toBeDisabled());
  });
})

// window.getComputedStyle()
