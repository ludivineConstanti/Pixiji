// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const MenuLink = ({
  path, text, colorMain, updateValueGlobal,
}) => {
  const cC = 'menulink';
  return (
    <NavLink
      to={`/${path}`}
      exact
      className={cC}
      style={{ color: colorMain }}
      onClick={() => {
        updateValueGlobal({ obj: 'UI', prop: ['menuIsOpen'], value: [false] });
      }}
    >
      <div className={`${cC}__square`} />
      {text}
    </NavLink>
  );
};

MenuLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorMain: PropTypes.string.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
};

// == Export
export default MenuLink;
