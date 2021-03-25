// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import
import './style.scss';
import MoonRabbitPlanet from 'src/components/d_Illustrations/MoonRabbitPlanet';
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import Question from './Question';

const Quiz = () => (
  <div className="quiz">
    <Question />
    <MoonRabbitPlanet />
    <ButtonBig text="next" />
  </div>
);

// == Export
export default Quiz;
