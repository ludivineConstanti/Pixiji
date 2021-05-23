// == Import npm
import React from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

// == Import local
import routes from 'src/assets/routes';
import Menu from 'src/components/b_Fixed/Menu';
// Pages
import Quizzes from 'src/components/b_Pages/Quizzes';
import Quiz from 'src/components/b_Pages/Quiz';
import Error404 from 'src/components/b_Pages/Error404';

const App = ({
  dataQuizzes,
}) => {
  const location = useLocation();
  return (
    <>
      <Menu isPlaying={/\/quiz\//.test(location.pathname)} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          {routes.map((route) => (
            <Route path={route.path} key={route.path} exact component={route.component} />
          ))}
          {dataQuizzes.map((quiz) => (
            <Route
              path={`/quizzes/${quiz.slug}`}
              key={`/quizzes/${quiz.slug}`}
              exact
              render={() => <Quizzes currentQuiz={quiz} />}
            />
          ))}
          {dataQuizzes.map((quiz) => (
            <Route
              path={`/quiz/${quiz.slug}`}
              key={`/quiz/${quiz.slug}`}
              exact
              render={() => <Quiz currentQuiz={quiz} />}
            />
          ))}
          <Route component={Error404} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

App.propTypes = {
  dataQuizzes: PropTypes.array.isRequired,

};

// == Export
export default App;
