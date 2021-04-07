// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local
import Menu from 'src/components/b_Fixed/Menu';
// Pages
import Quiz from 'src/components/b_Pages/Quiz';
import SApp from './SApp';

// == Composant
const App = ({ colorMain }) => (
  <SApp className="app" colorMain={colorMain}>
    <Menu />
    <Switch>
      <Route path="/" exact>
        home
      </Route>
      <Route path="/quiz/:slug" exact>
        <Quiz />
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
