import { createSlice } from '@reduxjs/toolkit';
import quizzes from 'src/assets/dataQuiz/quizzes';

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    data: quizzes,
    currentSlug: quizzes[0].slug,
  },

  reducers: {
    updateValueQuizzes: (state, { payload }) => {
      // the action prop will always have to be an object formatted as such
      // {prop: ["prop1", "prop2"], value: ["valueforProp1", "valueForProp2"]}
      // This way, I can change multiple values
      for (let i = 0; i < payload.prop.length; i += 1) {
        state[payload.prop[i]] = payload.value[i];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateValueQuizzes,
} = quizzesSlice.actions;

export default quizzesSlice.reducer;
