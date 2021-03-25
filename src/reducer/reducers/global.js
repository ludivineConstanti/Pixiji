import {
  UPDATE_VALUE_GLOBAL,
} from '../actions/global';

const initialState = {
  UI: {
    colorMain: '#0A2846',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_VALUE_GLOBAL: {
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
