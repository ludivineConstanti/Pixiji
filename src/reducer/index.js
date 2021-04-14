import { combineReducers } from 'redux';

import globalSlice from 'src/reducer/slices/globalSlice';
import kanjisArrSlice from 'src/reducer/slices/kanjisArrSlice';
import quizSlice from 'src/reducer/slices/quizSlice';
import quizzesSlice from 'src/reducer/slices/quizzesSlice';

// We export the result of all the combined reducers
// to use it in createStore

export default combineReducers({
  global: globalSlice,
  quiz: quizSlice,
  kanjisArr: kanjisArrSlice,
  quizzes: quizzesSlice,
});

// Everything is combined in a new state
