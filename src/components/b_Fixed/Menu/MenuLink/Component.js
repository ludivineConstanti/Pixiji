// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import SMenuLink from './SMenuLink';

// == Import
import './style.scss';

const MenuLink = ({
  path, text, colorMain, updateValueGlobal,
}) => {
  const cC = 'menulink';
  return (
    <SMenuLink
      to={`/${path}`}
      exact
      className={cC}
      colorMain={colorMain}
      onClick={() => {
        updateValueGlobal({ prop: ['menuIsOpen'], value: [false] });
      }}
    >
      <div className={`${cC}__square`} />
      {text}
    </SMenuLink>
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
