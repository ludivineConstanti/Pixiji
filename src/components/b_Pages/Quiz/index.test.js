import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import store from 'src/store';
import dataQuiz from 'src/assets/dataQuiz/quizzes';
import Quiz from './index';
import { lQuiz, lIllu } from 'src/assets/labels';

//screen.debug(null, Infinity);
describe('Quiz initial state', () => {
  render(<Provider store={store}><Quiz currentQuiz={dataQuiz[0]} /></Provider>);
  test('Verify that the required elements exist', () => {
    expect(screen.getByLabelText('question')).toBeDefined();
    // Minimum number of questions is 1
    expect(screen.getAllByLabelText(lQuiz.progressSquare).length).toBeGreaterThan(0);
    // It doesn't make sense to have 0 or 1 possible answers to a question
    expect(screen.getAllByLabelText(lQuiz.buttonKanji).length).toBeGreaterThan(1);
    expect(screen.getAllByLabelText(lIllu.mainSquare).length).toBeGreaterThan(1);
    expect(screen.getAllByLabelText(lQuiz.progressSquare).length).toEqual(screen.getAllByLabelText(lIllu.mainSquare).length);
  });
  test('Verify more precise requirements for the elements', () => {
    // Minimum number of questions is 1
    
  });
});
