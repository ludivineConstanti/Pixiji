import { createSlice } from '@reduxjs/toolkit';

import dataQuiz from 'src/assets/dataQuiz';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    dataQuiz,
    current: {
      totalQuestions: dataQuiz.length,
    },
    user: {
      answeredQuestion: false,
      answeredCorrectly: false,
      rightAnswers: [],
    },
  },

  reducers: {
    updateValueQuiz: (state, { payload }) => {
      // the action prop will always have to be an object formatted as such
      // {obj: ["objName"], prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}
      // This way, I can change multiple values inside the same object
      // I didn't find how to dynamise the obj part of the statement
      // (how to go into a sub object of an object), but I could use an if / else statement
      // in the meantime (if obj.length === 1...)
      for (let i = 0; i < payload.prop.length; i += 1) {
        state[payload.obj[0]][payload.prop[i]] = payload.value[i];
      }
    },
    updateFirstQuestionQuiz: (state, { payload }) => {
      // {prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}
      for (let i = 0; i < payload.prop.length; i += 1) {
        state.dataQuiz[0].infosAnswer = {
          ...state.dataQuiz.infosAnswer,
          [payload.prop[i]]: payload.value[i],
        };
      }
    },
    answeredCorrectlyQuiz: (state, { payload }) => {
      state.user = {
        ...state.user,
        answeredQuestion: true,
        answeredCorrectly: true,
        rightAnswers: [...state.user.rightAnswers, payload],
      };
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
  },
});

// Action creators are generated for each case reducer function
export const {
  updateValueQuiz, updateFirstQuestionQuiz, answeredCorrectlyQuiz, nextQuestionQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
