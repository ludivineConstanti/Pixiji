// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

// == Import
import Arrow from 'src/components/e_Interactives/Arrow';
import SButtonBig, { SButton, SComment, SText } from './SButtonBig';

const ButtonBig = ({
  comment, text, onClick, colorMain, colorButton, side, path, arrowDirection,
}) => {
  const content = (
    <SButtonBig
      animate={{ [side]: 0, color: colorMain }}
      s={{ colorButton, side }}
    >
      <SComment>{comment}</SComment>
      <SText>{text}</SText>
      <Arrow pointsToward={arrowDirection} isWhite={colorButton !== 'white'} />
    </SButtonBig>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {path ? (
        <NavLink to={path}>
          {content}
        </NavLink>
      ) : (
        <SButton onClick={onClick} type="button" s={{ side }}>
          {content}
        </SButton>
      )}
    </AnimatePresence>
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
};

ButtonBig.defaultProps = {
  comment: '',
  onClick: () => {},
  side: 'left',
  path: '',
  arrowDirection: 'right',
  colorButton: 'white',
};

// == Export
export default ButtonBig;
