// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Color } from 'framer';

// == Import
import SMenuSetting, { SText, SOnOff } from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMain, updateValueGlobal, cheating,
}) => {
  // convert to rgb / hsl, lighten and convert back to hex code
  const colorMainL1 = Color.toHexString(Color.lighten(Color(colorMain), 10));

  const vMenuSetting = {
    initial: { height: '0px' },
    animate: { height: '64px' },
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
