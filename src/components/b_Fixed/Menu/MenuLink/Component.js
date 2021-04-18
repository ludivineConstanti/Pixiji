// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Color } from 'framer';

// == Import
import { tMLLetterSpacing } from 'src/styles/typo';
import './style.scss';
import SMenuLink from './SMenuLink';

const MenuLink = ({
  path, text, colorMain, updateValueGlobal,
}) => {
  // convert to rgb / hsl, lighten and convert back to hex code
  const colorMainL1 = Color.toHexString(Color.lighten(Color(colorMain), 10));

  const vMenuLink = {
    initial: { letterSpacing: '0px' },
    animate: { letterSpacing: `${tMLLetterSpacing}px` },
    whileHover: { color: colorMain, letterSpacing: `${tMLLetterSpacing * 2}px` },
  };

  const vSquare = {
    initial: { backgroundColor: colorMainL1 },
    whileHover: { backgroundColor: colorMain },
  };

  return (
    <SMenuLink
      to={path}
      exact
      onClick={() => {
        updateValueGlobal({ prop: ['menuIsOpen'], value: [false] });
      }}
      s={{ colorMainL1 }}
      variants={vMenuLink}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <motion.div variants={vSquare} className="menuLink__square" />
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
