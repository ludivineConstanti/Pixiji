// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import MoonRabbit from 'src/components/d_Illustrations/MoonRabbit';
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import Question from './Question';

const Quiz = ({ answeredQuestion, answeredCorrectly }) => (
  <div className="quiz">
    <Question />
    <MoonRabbit />
    {answeredQuestion && (answeredCorrectly ? <ButtonBig comment="correct!" text="next" /> : <ButtonBig comment="wrong!" text="next" />)}
  </div>
);

Quiz.propTypes = {
  answeredQuestion: PropTypes.bool.isRequired,
  answeredCorrectly: PropTypes.bool.isRequired,
};

// == Export
export default Quiz;
