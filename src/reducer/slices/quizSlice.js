import { createSlice } from '@reduxjs/toolkit';

import kanjisInitial from 'src/assets/dataQuiz/kanjisInitial';
import kanjis from 'src/assets/dataQuiz/kanjis';
import quizFormatter from 'src/helpers/formatters/quizFormatter';
import quizzes from 'src/assets/dataQuiz/quizzes';

const initialState = (quizId) => {
  const currentQuiz = kanjis.filter((e) => e.quizId === quizId);
  return {
    dataQuiz: quizFormatter(kanjisInitial),
    totalQuestions: 0,
    totalOptions: currentQuiz.length,
    title: quizzes[quizId - 1].title,
    finished: false,
    answeredQuestion: false,
    answeredCorrectly: false,
    rightAnswers: [],
    wrongAnswers: [],
  };
};

const emptyAnswer = {
  answer: {
    kanji: '', en: '', kana: '', kanaEn: '',
  },
  infosAnswer: { answeredRight: 1, answeredWrong: 0 },
};

// put it there since I need it in 2 different actions
const initialize = (state, payload) => {
  const { quizId } = payload;

  const cQ = state[`quiz${quizId}`];
  const currentQuiz = kanjis.filter((e) => e.quizId === quizId);
  const formattedQuiz = quizFormatter(currentQuiz);
  cQ.dataQuiz = formattedQuiz;

  if (cQ.totalQuestions === 0) {
    cQ.totalQuestions = formattedQuiz.length;
  }

  cQ.finished = false;
  cQ.answeredQuestion = false;
  cQ.answeredCorrectly = false;
  cQ.rightAnswers = [];
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    dataQuizzes: quizzes,
    currentQuizId: 1,
    currentSlug: quizzes[0].slug,
    quiz1: initialState(1),
    quiz2: initialState(2),
    quiz3: initialState(3),
  },

  reducers: {
    updateIdQuiz: (state, { payload }) => {
      // { quizId, slug}
      state.currentQuizId = payload.quizId;
      state.currentSlug = payload.slug;
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
      const tempWrongAnswers = cQ.wrongAnswers;

      if (payload.answer.id === cQ.dataQuiz[0].arrAnswers[infosAnswer.answerIndex].id) {
        cQ.answeredCorrectly = true;
        cQ.dataQuiz[0].infosAnswer.answeredRight += 1;
        cQ.rightAnswers = [
          ...cQ.rightAnswers,
          { answer: payload.answer, infosAnswer },
        ];
        if (cQ.dataQuiz[0].infosAnswer.answeredWrong > 0) {
          tempWrongAnswers.push({ answer: payload.answer, infosAnswer });
        }
        if (cQ.dataQuiz[0].infosAnswer.answeredWrong === 0) {
          tempWrongAnswers.push(emptyAnswer);
        }
        if (cQ.totalQuestions === cQ.rightAnswers.length) {
          cQ.finished = true;
        }
        tempWrongAnswers.sort((a, b) => a.infosAnswer.answeredWrong - b.infosAnswer.answeredWrong);
        cQ.wrongAnswers = tempWrongAnswers;
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
      const tempWrongAnswers = [];

      if (!cQ.finished) {
        cQ.dataQuiz.forEach((e) => {
          let answerIndex;
          if (e.infosAnswer.answerIndex) {
            answerIndex = e.infosAnswer.answerIndex;
          }
          else {
            answerIndex = Math.floor(Math.random() * e.arrAnswers.length);
          }
          if (e.infosAnswer.answeredWrong > 0) {
            tempWrongAnswers.push(
              { answer: e.arrAnswers[answerIndex], infosAnswer: e.infosAnswer },
            );
          }
          if (e.infosAnswer.answeredWrong === 0) {
            tempWrongAnswers.push(emptyAnswer);
          }
          cQ.rightAnswers.push(
            { answer: e.arrAnswers[answerIndex], infosAnswer: { ...e.infosAnswer, answerIndex } },
          );
        });
        cQ.dataQuiz = quizFormatter(kanjisInitial);
        cQ.finished = true;
        cQ.wrongAnswers = [...cQ.wrongAnswers, ...tempWrongAnswers];
      }
      else {
        initialize(state, { quizId: payload.quizId });
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
