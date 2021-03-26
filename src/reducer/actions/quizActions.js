export const UPDATE_VALUE_QUIZ = 'UPDATE_VALUE_QUIZ';
export const ANSWERED_CORRECTLY_QUIZ = 'ANSWERED_CORRECTLY_QUIZ';

export const updateValueQuiz = (obj, prop, value) => ({
  type: UPDATE_VALUE_QUIZ,
  obj,
  prop,
  value,
});

export const answeredCorrectlyQuiz = (payload) => ({
  type: ANSWERED_CORRECTLY_QUIZ,
  payload,
});
