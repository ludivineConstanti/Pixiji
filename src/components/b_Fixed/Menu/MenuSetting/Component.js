// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import SMenuSetting from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMain,
}) => {
  const cC = 'menuSetting';
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  // lighter 1
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;
  return (
    <SMenuSetting
      className={cC}
      type="button"
      onClick={onClick}
      colorMainL1={colorMainL1}
    >
      {text}
      {hasSwitch && (
      <>
        <span className={`${cC}__square`}>off</span>
        <span className={`${cC}__square`}>on</span>
      </>
      )}
    </SMenuSetting>
  );
};

MenuSetting.propTypes = {
  text: PropTypes.string.isRequired,
  colorMain: PropTypes.string.isRequired,
  hasSwitch: PropTypes.bool,
  onClick: PropTypes.func,
};

MenuSetting.defaultProps = {
  hasSwitch: false,
  onClick: () => {},
};

// == Export
export default MenuSetting;
