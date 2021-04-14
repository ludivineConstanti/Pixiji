// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import SMenuLink from './SMenuLink';

const MenuLink = ({
  path, text, colorMain, updateValueGlobal,
}) => (
  <SMenuLink
    to={`/${path}`}
    exact
    onClick={() => {
      updateValueGlobal({ prop: ['menuIsOpen'], value: [false] });
    }}
    s={{ colorMain }}
  >
    <div />
    {text}
  </SMenuLink>
);

MenuLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  colorMain: PropTypes.string.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
};

// == Export
export default MenuLink;
