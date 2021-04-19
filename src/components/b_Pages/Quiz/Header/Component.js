// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

// == Import
import SHeader from './SHeader';
import ProgressBar from '../ProgressBar';

const Header = ({
  quizId, title, totalOptions, finishedQuiz,
}) => (
  <SHeader>
    <h2>quiz {quizId} - {title} ({totalOptions} kanjis)</h2>
    <AnimatePresence exitBeforeEnter>
      {!finishedQuiz && (
        <ProgressBar />
      )}
    </AnimatePresence>
  </SHeader>
);

Header.propTypes = {
  quizId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalOptions: PropTypes.number.isRequired,
  finishedQuiz: PropTypes.bool.isRequired,
};

// == Export
export default Header;
