// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Color } from 'framer';

// == Import
import SMenuSetting, { SText, SOnOff } from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMain, cheating,
}) => {
  // convert to rgb / hsl, lighten and convert back to hex code
  const colorMainL1 = Color.toHexString(Color.lighten(Color(colorMain), 10));

  const [vMenuSetting, setVMenuSetting] = useState({
    initial: { height: '0px' },
    animate: { height: '64px' },
    whileHover: { backgroundColor: colorMain },
  });

  useEffect(() => {
    setVMenuSetting({
      ...vMenuSetting,
      animate: { ...vMenuSetting.animate, backgroundColor: colorMainL1 },
      whileHover: { backgroundColor: colorMain },
    });
  }, [colorMain]);

  return (
    <SMenuSetting
      type="button"
      onClick={onClick}
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
  cheating: PropTypes.bool.isRequired,
};

MenuSetting.defaultProps = {
  hasSwitch: false,
  onClick: () => {},
};

// == Export
export default MenuSetting;
