// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import SMenuSetting, { SText, SOnOff } from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMain, updateValueGlobal, cheating,
}) => {
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  // lighter 1
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  const vMenuSetting = {
    initial: { padding: 0 },
    animate: { padding: 24 },
    whileHover: { backgroundColor: colorMain },
  };

  return (
    <SMenuSetting
      type="button"
      onClick={() => {
        onClick();
        updateValueGlobal({ prop: ['menuIsOpen'], value: [false] });
      }}
      s={{ colorMainL1 }}
      variants={vMenuSetting}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <SText>{text}</SText>
      {hasSwitch && (
      <>
        <SOnOff s={{ active: !cheating, colorMain }}>off</SOnOff>
        <SOnOff s={{ active: cheating, colorMain }}>on</SOnOff>
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
  cheating: PropTypes.bool.isRequired,
};

MenuSetting.defaultProps = {
  hasSwitch: false,
  onClick: () => {},
};

// == Export
export default MenuSetting;
