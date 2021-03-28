import { combineReducers } from 'redux';

import quizSlice from 'src/reducer/slices/quizSlice';
import globalSlice from 'src/reducer/slices/globalSlice';

// We export the result of all the combined reducers
// to use it in createStore

export default combineReducers({
  global: globalSlice,
  quiz: quizSlice,
});

// Everything is combined in a new state
