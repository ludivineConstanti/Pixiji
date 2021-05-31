import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import store from 'src/store';
import dataQuiz from 'src/assets/dataQuiz/quizzes';
import { lQuiz, lIllu, tIdQuiz } from 'src/assets/querySelectors';
import Quiz from '../index';

export const returnRef = () => ({
  title: screen.getByRole('heading', { name: /Quiz/i }),
  question: screen.getByText(/Which character means/i),
  buttonNext: screen.queryByRole('button', { name: 'next' }),
  arrProgressSquare: screen.getAllByLabelText(lQuiz.progressSquare),
  arrButtonKanji: screen.getAllByLabelText(lQuiz.buttonKanji),
  rightAnswer: screen.getByTestId(tIdQuiz.rightAnswer),
  arrWrongAnswer: screen.getAllByTestId(tIdQuiz.wrongAnswer),
  arrMainSquare: screen.getAllByLabelText(lIllu.mainSquare),
  arrSquare: screen.queryAllByLabelText(lIllu.square),
});

export const renderComponent = () => {
  render(<Provider store={store}><Quiz currentQuiz={dataQuiz[0]} /></Provider>);
  return returnRef();
};

export const setRef = (action, element) => {
  const ref = returnRef();
  userEvent[action](element);
  return returnRef();
};
