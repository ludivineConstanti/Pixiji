// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import
import ButtonBig from 'src/components/e_Interactives/ButtonBig';
import TextWithTitle from 'src/components/c_Partials/TextWithTitle';
import Illu from 'src/components/d_Illustrations/Illu';

const Quizzes = () => (
  <>
    <Illu useCase="quiz" index={0} animationCase="quizPreview" />
    <div className="quizzes">
      <TextWithTitle
        title="Quiz 1"
        text={['This quiz contains the 80 kanjis that are taught in the 1st grade, in Japan.']}
        button={{ text: 'start', path: 'quiz/first-grade' }}
      />
      <ButtonBig text="next" show />
      <ButtonBig text="next" side="right" show />
    </div>
  </>
);

/* Quizzes.propTypes = {
}; */

// == Export
export default Quizzes;
