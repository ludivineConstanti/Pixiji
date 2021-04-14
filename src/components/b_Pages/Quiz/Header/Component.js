// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SHeader from './SHeader';
import ProgressBar from '../ProgressBar';

const Header = ({ quizId, title, totalOptions }) => (
  <SHeader>
    <h2>quiz {quizId} - {title} ({totalOptions} kanjis)</h2>
    <ProgressBar />
  </SHeader>
);

Header.propTypes = {
  quizId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalOptions: PropTypes.number.isRequired,
};

// == Export
export default Header;
