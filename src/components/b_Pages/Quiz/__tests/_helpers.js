import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import store from 'src/store';
import dataQuiz from 'src/assets/dataQuiz/quizzes';
import {
  tQuiz, lQuiz, tIdQuiz, lIllu,
} from 'src/assets/querySelectors';
import kanjis from 'src/assets/dataQuiz/kanjis';
import Quiz from '../index';

const t = {
  title: new RegExp(tQuiz.title),
  question: new RegExp(tQuiz.question),
  buttonNext: new RegExp(tQuiz.buttonNext),
};

export const returnRef = () => ({
  title: screen.getByRole('heading', { name: t.title }),
  question: screen.queryByText(t.question),
  buttonNext: screen.queryByRole('button', { name: t.buttonNext }),
  arrProgressSquare: screen.queryAllByLabelText(lQuiz.progressSquare),
  arrButtonKanji: screen.queryAllByLabelText(lQuiz.buttonKanji),
  rightAnswer: screen.queryByTestId(tIdQuiz.rightAnswer),
  arrWrongAnswer: screen.queryAllByTestId(tIdQuiz.wrongAnswer),
  arrMainSquare: screen.getAllByLabelText(lIllu.mainSquare),
  arrSquare: screen.queryAllByLabelText(lIllu.square),
});

export const quiz = dataQuiz[1];
export const quizKanjis = kanjis.filter((kanji) => (
  kanji.quizId === quiz.id
));

export const renderComponent = () => {
  render(<Provider store={store}><Quiz currentQuiz={quiz} /></Provider>);
  return returnRef();
};

export const setRef = (action, element) => {
  userEvent[action](element);
  return returnRef();
};
