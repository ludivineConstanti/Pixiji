import { combineReducers } from 'redux';

import quizSlice from 'src/reducer/slices/quizSlice';
import globalReducer from 'src/reducer/reducers/globalReducer';

// We export the result of all the combined reducers
// to use it in createStore

export default combineReducers({
  global: globalReducer,
  quiz: quizSlice,
});

// Everything is combined in a new state
