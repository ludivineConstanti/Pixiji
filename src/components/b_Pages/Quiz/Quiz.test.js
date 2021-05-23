import React from 'react';
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'

import Quiz from './index.js';
import store from 'src/store';
import dataQuiz from 'src/assets/dataQuiz/quizzes';

describe('Quiz', () => {
  test('renders Quiz component', () => {
    render(<Provider store={store}><Quiz currentQuiz={dataQuiz[0]} /></Provider>);
    screen.debug();
  })
})
