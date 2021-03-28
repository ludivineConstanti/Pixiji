// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const ButtonBig = ({
  comment, text, onClick, colorMain,
}) => {
  // cC for classComponent
  const cC = 'buttonBig';
  return (
    <button className={`${cC}`} onClick={onClick} type="button" style={{ color: `${colorMain}` }}>
      <span className={`${cC}__result`}>{comment}</span> {text}
      <div className={`${cC}__arrow`}>
        <div style={{ backgroundColor: `${colorMain}` }} className={`${cC}__arrow--stroke`} />
        <div className={`${cC}__arrow--end`} />
      </div>
    </button>
  );
};

ButtonBig.propTypes = {
  comment: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  colorMain: PropTypes.string.isRequired,
};

ButtonBig.defaultProps = {
  comment: '',
  onClick: () => {},
};

// == Export
export default ButtonBig;
