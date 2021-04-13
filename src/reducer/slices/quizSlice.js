import { createSlice } from '@reduxjs/toolkit';

import quizzes from 'src/assets/dataQuiz/quizzes';
import kanjisInitial from 'src/assets/dataQuiz/kanjisInitial';
import kanjis from 'src/assets/dataQuiz/kanjis';
import quizFormatter from 'src/helpers/formatters/quizFormatter';

const initialState = {
  dataQuizzes: quizzes,
  dataQuiz: quizFormatter(kanjisInitial),
  current: {
    totalQuestions: 0,
    totalOptions: 0,
    title: 'loading...',
    quizId: 0,
    finished: false,
  },
  user: {
    answeredQuestion: false,
    answeredCorrectly: false,
    rightAnswers: [],
  },
};

// put it there since I need it in 2 different actions
const initialize = (state, payload) => {
  const currentQuiz = kanjis.filter((e) => e.quizId === payload.quizId);
  const formattedQuiz = quizFormatter(currentQuiz);
  state.dataQuiz = formattedQuiz;

  state.current.totalQuestions = formattedQuiz.length;
  state.current.totalOptions = currentQuiz.length;
  state.current.title = payload.title;

  state.current.finished = initialState.current.finished;

  state.user.answeredQuestion = initialState.user.answeredQuestion;
  state.user.answeredCorrectly = initialState.user.answeredCorrectly;
  state.user.rightAnswers = initialState.user.rightAnswers;
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    ...initialState,
  },

  reducers: {
    updateValueQuiz: (state, { payload }) => {
      // {obj: "objName", prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}
      for (let i = 0; i < payload.prop.length; i += 1) {
        state[payload.obj][payload.prop[i]] = payload.value[i];
      }
    },
    initializeQuiz: (state, { payload }) => {
      // {quizId: number}
      if (state.current.quizId !== payload.quizId || state.current.finished) {
        initialize(state, payload);
        state.current.quizId = payload.quizId;
      }
    },
    updateFirstQuestionQuiz: (state, { payload }) => {
      // {prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}

      for (let i = 0; i < payload.prop.length; i += 1) {
        state.dataQuiz[0].infosAnswer[payload.prop[i]] = payload.value[i];
      }
    },
    answeredQuestionQuiz: (state, { payload }) => {
      // {answer: answerObj}

      state.user.answeredQuestion = payload.answer.id;

      const { infosAnswer } = state.dataQuiz[0];

      if (payload.answer.id === state.dataQuiz[0].arrAnswers[infosAnswer.answerIndex].id) {
        state.user.answeredCorrectly = true;
        state.dataQuiz[0].infosAnswer.answeredRight += 1;
        state.user.rightAnswers = [
          ...state.user.rightAnswers,
          { answer: payload.answer, infosAnswer },
        ];
        if (state.current.totalQuestions === state.user.rightAnswers.length) {
          state.current.finished = true;
        }
      }
      else {
        state.dataQuiz[0].infosAnswer.answeredWrong += 1;
      }
    },
    nextQuestionQuiz: (state) => {
      const currentQuestion = state.dataQuiz[0];
      state.dataQuiz.shift();
      if (!state.user.answeredCorrectly) {
        state.dataQuiz = [...state.dataQuiz, currentQuestion];
      }
      state.user.answeredQuestion = false;
      state.user.answeredCorrectly = false;
    },
    cheatingButtonFinishQuiz: (state) => {
      if (state.current.totalQuestions !== state.user.rightAnswers.length) {
        state.dataQuiz.forEach((e) => {
          let answerIndex;
          if (e.infosAnswer.answerIndex) {
            answerIndex = e.infosAnswer.answerIndex;
          }
          else {
            answerIndex = Math.floor(Math.random() * e.arrAnswers.length);
          }
          state.user.rightAnswers.push(
            { answer: e.arrAnswers[answerIndex], infosAnswer: { ...e.infosAnswer, answerIndex } },
          );
          state.dataQuiz = quizFormatter(kanjisInitial);
          state.current.finished = true;
        });
      }
      else {
        initialize(state, { quizId: state.current.quizId, title: state.current.title });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateValueQuiz,
  initializeQuiz,
  updateFirstQuestionQuiz,
  answeredQuestionQuiz,
  nextQuestionQuiz,
  cheatingButtonFinishQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
