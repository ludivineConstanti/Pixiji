// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// == Import
import Arrow from 'src/components/e_Interactives/Arrow';
import { tBInTFontSize, tBInTLetterSpacing } from 'src/styles/typo';
import { strokeWidth } from 'src/styles/g';
import { buttonArrowHT, buttonArrowHX } from 'src/styles/animation';
import SButtonInText, { SText } from './SButtonInText';

const ButtonInText = ({
  text, path,
}) => {
  const vButtonInText = {
    initial: {
      x: 500, width: '0%', padding: 0, border: '0px solid #FFF',
    },
    animate: {
      x: 0, width: '100%', padding: '24px', border: `${strokeWidth} solid #FFF`, transition: { delay: 0.3 },
    },
    exit: {
      x: -250, width: '0%', padding: 0, border: '0px solid #FFF',
    },
  };
  const vText = {
    initial: { fontSize: 0, letterSpacing: 0 },
    animate: {
      fontSize: tBInTFontSize,
      letterSpacing: `${tBInTLetterSpacing}px`,
      transition: { delay: 0.15 },
    },
    exit: { fontSize: 0, letterSpacing: 0, transition: { delay: 0.15, duration: 0.15 } },
    whileHover: {
      x: -buttonArrowHX,
      letterSpacing: `${tBInTLetterSpacing + 1}px`,
      transition: buttonArrowHT,
    },
  };

  const MArrow = motion(Arrow);

  const vArrow = {
    whileHover: {
      x: -buttonArrowHX,
      transition: buttonArrowHT,
    },
  };

  return (
    <SButtonInText
      to={`/${path}`}
      variants={vButtonInText}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="whileHover"
    >
      <SText variants={vText}>{text}</SText>
      <MArrow variants={vArrow} isWhite />
    </SButtonInText>
  );
};

ButtonInText.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// == Export
export default ButtonInText;
