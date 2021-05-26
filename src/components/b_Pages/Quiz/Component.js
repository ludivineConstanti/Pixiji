// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

// == Import
import Illu from 'src/components/d_Illustrations/Illu';
import SQuiz from './SQuiz';
import Header from './Header';
import StatePlaying from './StatePlaying';
import StateFinished from './StateFinished';

const Quiz = ({
  finishedQuiz, kanjisArr, currentQuiz, updateIdQuiz, initializeQuiz,
}) => {
  useEffect(() => {
    updateIdQuiz({ quizId: currentQuiz.id, slug: currentQuiz.slug });
    initializeQuiz({ quizId: currentQuiz.id, title: currentQuiz.title });
  }, []);
  return (
    <>
      <Illu useCase="quiz" index={currentQuiz.id - 1} kanjisArr={kanjisArr} />
      <SQuiz>
        <Header />
        <AnimatePresence exitBeforeEnter>
          { finishedQuiz ? <StateFinished /> : <StatePlaying /> }
        </AnimatePresence>
      </SQuiz>
    </>
  );
};

Quiz.propTypes = {
  finishedQuiz: PropTypes.bool.isRequired,
  kanjisArr: PropTypes.array.isRequired,
  currentQuiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  updateIdQuiz: PropTypes.func.isRequired,
  initializeQuiz: PropTypes.func.isRequired,
};

// == Export
export default Quiz;
