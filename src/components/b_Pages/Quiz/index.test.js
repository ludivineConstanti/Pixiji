import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import store from 'src/store';
import dataQuiz from 'src/assets/dataQuiz/quizzes';
import Quiz from './index';
import { lQuiz, lIllu } from 'src/assets/labels';

beforeEach(() => {
  render(<Provider store={store}><Quiz currentQuiz={dataQuiz[0]} /></Provider>);
});

//screen.debug(null, Infinity);
describe('Quiz initial state', () => {
  test('Verify that the required elements are there', () => {
    expect(screen.getByLabelText('question')).toBeDefined();
    // Minimum number of questions is 1
    expect(screen.getAllByLabelText(lQuiz.progressSquare).length).toBeGreaterThan(0);
    // It doesn't make sense to have 0 or 1 possible answers to a question
    expect(screen.getAllByLabelText(lQuiz.buttonKanji).length).toBeGreaterThan(1);
    expect(screen.getAllByLabelText(lIllu.mainSquare).length).toBeGreaterThan(1);
    // The button to go to the next question should not be there, before the user clicked on an answer
    expect(screen.queryByText(/next/i)).toBeNull();
  });

  test('Verify more precise requirements for the elements', () => {
    // The main squares show the answers of the quiz, once the user answered correctly
    // So there should be as many main square in the illustrations as there is questions in the quiz
    expect(screen.getAllByLabelText(lQuiz.progressSquare).length).toEqual(screen.getAllByLabelText(lIllu.mainSquare).length);
    screen.getAllByLabelText(lQuiz.buttonKanji).forEach(button => expect(button).not.toBeDisabled());
  });

});

describe('Quiz state after clicking on answer', () => {
  test('Verify that the required elements are there after clicking', () => {
    userEvent.click(screen.getAllByLabelText(lQuiz.buttonKanji)[0]);
    // The button to go to the next question should now be displayed
    expect(screen.getByText(/next/i)).toBeDefined();
  });
})
