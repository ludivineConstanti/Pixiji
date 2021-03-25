import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducer';
// import axiosUser from 'src/middlewares/axiosUser';
// import axiosQuizzes from 'src/middlewares/axiosQuizzes';
// import axiosArticles from 'src/middlewares/axiosArticles';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // axiosUser, axiosQuizzes, axiosArticles,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
