// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// == Import
import { tMLLetterSpacing } from 'src/styles/typo';
import './style.scss';
import SMenuLink from './SMenuLink';

const MenuLink = ({
  path, text, colorMainL1, colorMain, updateValueGlobal,
}) => {
  const [vMenuLink, setVMenuLink] = useState({
    initial: { letterSpacing: '0px' },
    animate: { letterSpacing: `${tMLLetterSpacing}px` },
    whileHover: { color: colorMain, letterSpacing: `${tMLLetterSpacing * 2}px` },
  });

  const [vSquare, setVSquare] = useState({
    initial: { backgroundColor: colorMainL1 },
    whileHover: { backgroundColor: colorMain },
  });

  useEffect(() => {
    setVSquare({
      ...vSquare,
      animate: { ...vSquare.animate, backgroundColor: colorMainL1 },
      whileHover: { ...vSquare.whileHover, backgroundColor: colorMain },
    });
    setVMenuLink({
      ...vMenuLink,
      animate: { ...vMenuLink.animate, color: colorMainL1 },
      whileHover: { ...vMenuLink.whileHover, color: colorMain },
    });
  }, [colorMain]);

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
  colorMainL1: PropTypes.string.isRequired,
  colorMain: PropTypes.string.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
};

// == Export
export default MenuLink;
