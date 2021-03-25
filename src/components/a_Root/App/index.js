// == Import npm
import React from 'react';

// == Import local
import 'src/components/a_Root/App/style.scss';
import Menu from 'src/components/b_Fixed/Menu';
// Pages
import Quiz from 'src/components/b_Pages/Quiz';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Quiz />
  </div>
);

// == Export
export default App;
