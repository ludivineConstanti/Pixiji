import { combineReducers } from 'redux';

import global from './reducers/global';
import quiz from './reducers/quiz';

// We export the result of all the combined reducers
// to use it in createStore

export default combineReducers({
  global,
  quiz,
});

// Everything is combined in a new state
