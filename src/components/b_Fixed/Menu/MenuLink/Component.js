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
    colorMain={colorMain}
    onClick={() => {
      updateValueGlobal({ prop: ['menuIsOpen'], value: [false] });
    }}
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
