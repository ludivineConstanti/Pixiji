export const UPDATE_VALUE_QUIZ = 'UPDATE_VALUE_QUIZ';

export const updateValueQuiz = (obj, prop, value) => ({
  type: UPDATE_VALUE_QUIZ,
  obj,
  prop,
  value,
});
