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
import Home from 'src/components/b_Pages/Home';

// == Composant
const App = () => (
  <>
    <Menu />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/quiz/:slug" exact>
        <Quiz />
      </Route>
      <Route>
        error 404 not found
      </Route>
    </Switch>
  </>
);

// == Export
export default App;
