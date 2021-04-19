// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import SMenuSetting, { SText, SOnOff } from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMainL1, colorMain, cheating,
}) => {
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
  colorMainL1: PropTypes.string.isRequired,
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
