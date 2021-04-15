// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Arrow from 'src/components/e_Interactives/Arrow';
import SButtonBig, { SButton, SComment, SText } from './SButtonBig';

const ButtonBig = ({
  comment, text, onClick, colorMain, colorButton, side, path, arrowDirection,
}) => {
  const variants = {
    initial: { [side]: -300, color: 'white' },
    animate: { [side]: 0, color: colorMain },
  };

  const content = (
    <SButtonBig
      variants={variants}
      initial="initial"
      animate="animate"
      exit="initial"
      s={{ colorButton }}
    >
      <SComment>{comment}</SComment>
      <SText>{text}</SText>
      <Arrow pointsToward={arrowDirection} isWhite={colorButton !== 'white'} />
    </SButtonBig>
  );

  return (
    <>
      {path ? (
        <NavLink to={path}>
          {content}
        </NavLink>
      ) : (
        <SButton onClick={onClick} type="button" s={{ side }}>
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
