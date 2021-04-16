// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Arrow from 'src/components/e_Interactives/Arrow';
import { tBInTFontSize, tBInTLetterSpacing } from 'src/styles/typo';
import { strokeWidth } from 'src/styles/g';
import SButtonInText, { SText } from './SButtonInText';

const ButtonInText = ({
  text, path,
}) => {
  const vButtonInText = {
    initial: {
      x: 500, width: '0%', padding: 0, border: 'none',
    },
    animate: {
      x: 0, width: '100%', padding: '24px', border: `${strokeWidth} solid white`, transition: { delay: 0.3 },
    },
    exit: {
      x: -250, width: '0%', padding: 0, border: 'none',
    },
  };
  const vText = {
    initial: { fontSize: 0, letterSpacing: 0 },
    animate: {
      fontSize: tBInTFontSize,
      letterSpacing: tBInTLetterSpacing,
      transition: { delay: 0.3 },
    },
    exit: { fontSize: 0, letterSpacing: 0, transition: { delay: 0.3 } },
  };

  const vArrow = {
    initial: { borderStyle: 'none' },
    animate: { borderStyle: 'solid', transition: { delay: 0.3 } },
    exit: { borderStyle: 'none' },
  };
  return (
    <SButtonInText
      to={`/${path}`}
      variants={vButtonInText}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SText variants={vText}>{text}</SText>
      <Arrow variants={vArrow} isWhite />
    </SButtonInText>
  );
};

ButtonInText.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

// == Export
export default ButtonInText;
