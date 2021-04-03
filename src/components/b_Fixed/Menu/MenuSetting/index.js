// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

const MenuSetting = ({
  text, hasSwitch, color, onClick,
}) => {
  const cC = 'menuSetting';
  return (
    <button
      className={cC}
      style={{ backgroundColor: color }}
      type="button"
      onClick={onClick}
    >
      {text}
      {hasSwitch && (
      <>
        <span className={`${cC}__square`}>off</span>
        <span className={`${cC}__square`}>on</span>
      </>
      )}
    </button>
  );
};

MenuSetting.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hasSwitch: PropTypes.bool,
  onClick: PropTypes.func,
};

MenuSetting.defaultProps = {
  hasSwitch: false,
  onClick: () => {},
};

// == Export
export default MenuSetting;
