// == Import npm
import React from 'react';
import {
  Route, Switch, Redirect, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

// == Import local
import Menu from 'src/components/b_Fixed/Menu';
// Pages
import Home from 'src/components/b_Pages/Home';
import Quizzes from 'src/components/b_Pages/Quizzes';
import Quiz from 'src/components/b_Pages/Quiz';
import ReadMe from 'src/components/b_Pages/ReadMe';
import About from 'src/components/b_Pages/About';
import Error404 from 'src/components/b_Pages/Error404';

const App = ({ dataQuizzes, updateIdQuiz, initializeQuiz }) => {
  const location = useLocation();
  return (
    <>
      <Menu />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route
            path="/quizzes/:slug"
            exact
            render={({ match }) => {
              const currentQuiz = dataQuizzes.filter((quiz) => quiz.slug === match.params.slug);
              if (!currentQuiz[0]) {
                return <Redirect to="/404-not-found" />;
              }
              return <Quizzes currentQuiz={currentQuiz[0]} />;
            }}
          />
          <Route
            path="/quiz/:slug"
            exact
            render={({ match }) => {
              const currentQuiz = dataQuizzes.filter((quiz) => quiz.slug === match.params.slug);
              if (!currentQuiz[0]) {
                return <Redirect to="/404-not-found" />;
              }
              updateIdQuiz({ quizId: currentQuiz[0].id });
              initializeQuiz({ quizId: currentQuiz[0].id, title: currentQuiz[0].title });
              return <Quiz currentQuiz={currentQuiz[0]} />;
            }}
          />
          <Route path="/read-me" exact component={ReadMe} />
          <Route path="/about" exact component={About} />
          <Route component={Error404} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

App.propTypes = {
  dataQuizzes: PropTypes.array.isRequired,
  updateIdQuiz: PropTypes.func.isRequired,
  initializeQuiz: PropTypes.func.isRequired,
};

// == Export
export default App;
