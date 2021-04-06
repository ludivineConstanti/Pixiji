// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import Menu from 'src/components/b_Fixed/Menu';
import IlluQuiz from 'src/components/d_Illustrations/IlluQuiz';
// Pages
import Quiz from 'src/components/b_Pages/Quiz';
import SApp from './SApp';

// == Composant
const App = ({ colorMain }) => (
  <SApp className="app" colorMain={colorMain}>
    <Menu />
    <Switch>
      <Route path="/" exact>
        <Quiz />
        <IlluQuiz />
      </Route>
      <Route path="/quiz/:slug" exact>
        <Quiz />
        <IlluQuiz />
      </Route>
      <Route>
        error 404 not found
      </Route>
    </Switch>
  </SApp>
);

App.propTypes = {
  colorMain: PropTypes.string.isRequired,
};

// == Export
export default App;
