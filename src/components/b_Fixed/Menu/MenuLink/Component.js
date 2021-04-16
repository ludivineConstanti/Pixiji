// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import { tMLLetterSpacing } from 'src/styles/typo';
import SMenuLink from './SMenuLink';

const MenuLink = ({
  path, text, colorMain, updateValueGlobal,
}) => {
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  // lighter 1
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  const vMenuLink = {
    initial: { letterSpacing: '0px' },
    animate: { letterSpacing: `${tMLLetterSpacing}px` },
    whileHover: { color: colorMain, letterSpacing: `${tMLLetterSpacing * 2}px` },
  };

  return (
    <SMenuLink
      to={`/${path}`}
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
      <div />
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
