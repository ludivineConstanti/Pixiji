// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SHeader from './SHeader';
import ProgressBar from '../ProgressBar';

const Header = ({ title, totalOptions }) => (
  <SHeader>
    <h2>{title} ({totalOptions} kanjis)</h2>
    <ProgressBar />
  </SHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  totalOptions: PropTypes.number.isRequired,
};

// == Export
export default Header;
