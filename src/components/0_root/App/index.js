// == Import npm
import React from 'react';

// == Import
import 'src/components/0_root/App/style.scss';
import Illustration from 'src/components/3_illustrations';
import moonRabbitPlanet from 'src/components/3_illustrations/moonRabbitPlanet';

// == Composant
const App = () => (
  <div className="app">
    <Illustration data={moonRabbitPlanet} className="moonRabbitPlanet" />
  </div>
);

// == Export
export default App;
