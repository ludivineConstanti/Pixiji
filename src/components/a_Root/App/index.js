// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import local
import 'src/components/a_Root/App/style.scss';
import Menu from 'src/components/b_Fixed/Menu';
import MoonRabbit from 'src/components/d_Illustrations/MoonRabbit';
// Pages
import Quiz from 'src/components/b_Pages/Quiz';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Switch>
      <Route path="/" exact>
        <Quiz />
        <MoonRabbit />
      </Route>
      <Route path="/quiz/:slug" exact>
        <Quiz />
        <MoonRabbit />
      </Route>
      <Route>
        error 404 not found
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
