import { createSlice } from '@reduxjs/toolkit';

import grade3 from 'src/assets/dataQuiz/grade3';
import quizFormatter from 'src/helpers/formatters/quizFormatter';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    dataQuiz: quizFormatter(grade3),
    current: {
      totalQuestions: quizFormatter(grade3).length,
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
  },
});

// Action creators are generated for each case reducer function
export const {
  updateValueQuiz, updateFirstQuestionQuiz, answeredQuestionQuiz, nextQuestionQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
