import { combineReducers } from 'redux';

import quizReducer from 'src/reducer/reducers/quizReducer';
import globalReducer from 'src/reducer/reducers/globalReducer';

// We export the result of all the combined reducers
// to use it in createStore

export default combineReducers({
  global: globalReducer,
  quiz: quizReducer,
});

// Everything is combined in a new state
