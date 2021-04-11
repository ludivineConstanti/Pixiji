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
import ReadMe from 'src/components/b_Pages/ReadMe';
import About from 'src/components/b_Pages/About';
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
      <Route path="/read-me" exact>
        <ReadMe />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route>
        error 404 not found
      </Route>
    </Switch>
  </>
);

// == Export
export default App;
