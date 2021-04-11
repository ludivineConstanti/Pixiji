// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import local
import Menu from 'src/components/b_Fixed/Menu';
// Pages
import Home from 'src/components/b_Pages/Home';
import Quizzes from 'src/components/b_Pages/Quizzes';
import Quiz from 'src/components/b_Pages/Quiz';
// == Composant
const App = () => (
  <>
    <Menu />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/quizzes" exact>
        <Quizzes />
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
