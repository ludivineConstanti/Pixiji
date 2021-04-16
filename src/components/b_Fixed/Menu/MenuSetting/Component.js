// == Import npm
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import SMenuSetting, { tHover, tClick } from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMain, updateValueGlobal,
}) => {
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  // lighter 1
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;
  const colorMainL2 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 20}%)`;

  return (
    <SMenuSetting
      type="button"
      onClick={() => {
        onClick();
        updateValueGlobal({ prop: ['menuIsOpen'], value: [false] });
      }}
      s={{ colorMain }}
    >
      {text}
      {hasSwitch && (
      <>
        <span>off</span>
        <span>on</span>
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
  updateValueGlobal: PropTypes.func.isRequired,
};

MenuSetting.defaultProps = {
  hasSwitch: false,
  onClick: () => {},
};

// == Export
export default MenuSetting;
