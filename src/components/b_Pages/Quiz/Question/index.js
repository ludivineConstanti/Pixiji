// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import
import './style.scss';
import data from 'src/assets/data';
import ButtonKanji from './ButtonKanji';

const Question = () => (
  <main className="question">
    <h2 className="question__text">Which character means {data[0][4].en}?</h2>
    <div className="question__options">
      {data[0].map((e) => <ButtonKanji key={e.id} possibleAnswer={e} />)}

    </div>
  </main>
);

// == Export
export default Question;
