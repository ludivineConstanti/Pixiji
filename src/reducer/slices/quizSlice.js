import { createSlice } from '@reduxjs/toolkit';

import kanjisInitial from 'src/assets/dataQuiz/kanjisInitial';
import kanjis from 'src/assets/dataQuiz/kanjis';
import quizFormatter from 'src/helpers/formatters/quizFormatter';

const initialState = {
  dataQuiz: quizFormatter(kanjisInitial),
  totalQuestions: 0,
  totalOptions: 0,
  title: 'loading...',
  finished: false,
  answeredQuestion: false,
  answeredCorrectly: false,
  rightAnswers: [],
};

// put it there since I need it in 2 different actions
const initialize = (state, payload) => {
  const { quizId, title } = payload;

  const cQ = state[`quiz${quizId}`];
  const currentQuiz = kanjis.filter((e) => e.quizId === quizId);
  const formattedQuiz = quizFormatter(currentQuiz);
  cQ.dataQuiz = formattedQuiz;

  cQ.totalQuestions = formattedQuiz.length;
  cQ.totalOptions = currentQuiz.length;
  cQ.title = title;

  cQ.finished = initialState.finished;
  cQ.answeredQuestion = initialState.answeredQuestion;
  cQ.answeredCorrectly = initialState.answeredCorrectly;
  cQ.rightAnswers = initialState.rightAnswers;
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentQuizId: 1,
    quiz1: initialState,
    quiz2: initialState,
    quiz3: initialState,
  },

  reducers: {
    updateIdQuiz: (state, { payload }) => {
      state.currentQuizId = payload.quizId;
    },
    initializeQuiz: (state, { payload }) => {
      // {quizId: number}
      const cQ = state[`quiz${payload.quizId}`];
      if (!cQ.rightAnswers.length) {
        initialize(state, payload);
      }
      state.currentQuizId = payload.quizId;
    },
    updateFirstQuestionQuiz: (state, { payload }) => {
      // {quizId: num, prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}
      const cQ = state[`quiz${payload.quizId}`];

      for (let i = 0; i < payload.prop.length; i += 1) {
        cQ.dataQuiz[0].infosAnswer[payload.prop[i]] = payload.value[i];
      }
    },
    answeredQuestionQuiz: (state, { payload }) => {
      // {quizId: num, answer: answerObj}
      const cQ = state[`quiz${payload.quizId}`];

      cQ.answeredQuestion = payload.answer.id;

      const { infosAnswer } = cQ.dataQuiz[0];

      if (payload.answer.id === cQ.dataQuiz[0].arrAnswers[infosAnswer.answerIndex].id) {
        cQ.answeredCorrectly = true;
        cQ.dataQuiz[0].infosAnswer.answeredRight += 1;
        cQ.rightAnswers = [
          ...cQ.rightAnswers,
          { answer: payload.answer, infosAnswer },
        ];
        if (cQ.totalQuestions === cQ.rightAnswers.length) {
          cQ.finished = true;
        }
      }
      else {
        cQ.dataQuiz[0].infosAnswer.answeredWrong += 1;
      }
    },
    nextQuestionQuiz: (state, { payload }) => {
      // {quizId: num}
      const cQ = state[`quiz${payload.quizId}`];

      const currentQuestion = cQ.dataQuiz[0];
      cQ.dataQuiz.shift();
      if (!cQ.answeredCorrectly) {
        cQ.dataQuiz = [...cQ.dataQuiz, currentQuestion];
      }
      cQ.answeredQuestion = false;
      cQ.answeredCorrectly = false;
    },
    cheatingButtonFinishQuiz: (state, { payload }) => {
      const cQ = state[`quiz${payload.quizId}`];

      if (cQ.totalQuestions !== cQ.rightAnswers.length) {
        cQ.dataQuiz.forEach((e) => {
          let answerIndex;
          if (e.infosAnswer.answerIndex) {
            answerIndex = e.infosAnswer.answerIndex;
          }
          else {
            answerIndex = Math.floor(Math.random() * e.arrAnswers.length);
          }
          cQ.rightAnswers.push(
            { answer: e.arrAnswers[answerIndex], infosAnswer: { ...e.infosAnswer, answerIndex } },
          );
          cQ.dataQuiz = quizFormatter(kanjisInitial);
          cQ.finished = true;
        });
      }
      else {
        initialize(state, { quizId: payload.quizId, title: payload.title });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateIdQuiz,
  initializeQuiz,
  updateFirstQuestionQuiz,
  answeredQuestionQuiz,
  nextQuestionQuiz,
  cheatingButtonFinishQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
