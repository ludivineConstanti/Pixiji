// == Import npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import
import './style.scss';
import SHeader from './SHeader';
import ProgressBar from '../ProgressBar';

const Header = () => {
  // cC for classComponent
  const cC = 'header';

  return (
    <SHeader className={cC}>
      <h2>Quiz 1 - 1st grade (80 kanjis)</h2>
      <ProgressBar />
    </SHeader>
  );
};

// == Export
export default Header;
