import {
  UPDATE_VALUE_QUIZ,
} from '../actions/quiz';

const initialState = {
  data: [],
  current: {
    rightAnswer: null,
    illustation: [],
  },
  user: {
    answer: null,
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
    default:
      return state;
  }
};
