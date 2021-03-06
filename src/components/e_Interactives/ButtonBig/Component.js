// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// == Import
import Arrow from 'src/components/e_Interactives/Arrow';
import { buttonArrowHT, buttonArrowHX } from 'src/styles/animation';
import SButtonBig, {
  SButton, SComment, SText,
} from './SButtonBig';

const ButtonBig = ({
  comment, text, onClick, colorMain, colorButton, side, path, arrowDirection
}) => {
  const vButtonBig = {
    initial: { [side]: -200, color: '#FFF', transition: { duration: 0.25 } },
    animate: { [side]: 0, color: colorMain, transition: { duration: 0.25 } },
  };

  const MArrow = motion(Arrow);

  const vArrow = {
    initial: { borderStyle: 'none' },
    animate: { borderStyle: 'solid' },
    exit: { borderStyle: 'none' },
    whileHover: {
      x: arrowDirection === 'right' ? buttonArrowHX : -buttonArrowHX,
      transition: buttonArrowHT,
    },
  };

  const content = (
    <SButtonBig
      variants={vButtonBig}
      initial="initial"
      animate="animate"
      exit="initial"
      whileHover="whileHover"
      s={{ colorButton }}
    >
      <SComment>{comment}</SComment>
      <SText>{text}</SText>
      <MArrow variants={vArrow} pointsToward={arrowDirection} isWhite={colorButton !== 'white'} />
    </SButtonBig>
  );

  return (
    <>
      {path ? (
        <NavLink to={path} aria-label={text}>
          {content}
        </NavLink>
      ) : (
        <SButton onClick={onClick} type="button" s={{ side }} aria-label={text}>
          {content}
        </SButton>
      )}
    </>
  );
};

ButtonBig.propTypes = {
  comment: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  colorMain: PropTypes.string.isRequired,
  side: PropTypes.string,
  path: PropTypes.string,
  arrowDirection: PropTypes.string,
  colorButton: PropTypes.string,
  altLabel: PropTypes.string,
};

ButtonBig.defaultProps = {
  comment: '',
  onClick: () => {},
  side: 'left',
  path: '',
  arrowDirection: 'right',
  colorButton: 'white',
  switchSide: true,
};

// == Export
export default ButtonBig;
