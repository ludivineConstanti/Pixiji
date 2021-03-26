import data from 'src/assets/data';
import {
  UPDATE_VALUE_QUIZ,
  ANSWERED_CORRECTLY_QUIZ,
} from '../actions/quizActions';

const initialState = {
  data,
  current: {
    rightAnswer: false,
  },
  user: {
    answeredQuestion: false,
    answeredCorrectly: false,
    rightAnswers: [],
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_VALUE_QUIZ: {
      return {
        ...state,
        [action.obj]: {
          ...state[action.obj],
          [action.prop]: action.value,
        },
      };
    }
    case ANSWERED_CORRECTLY_QUIZ: {
      return {
        ...state,
        user: {
          ...state.user,
          answeredQuestion: true,
          answeredCorrectly: true,
          rightAnswers: [...state.user.rightAnswers, action.payload],
        },
      };
    }
    default:
      return state;
  }
};
