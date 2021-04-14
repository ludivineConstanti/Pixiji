// == Import npm
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import SMenuSetting, { tHover, tClick } from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMain,
}) => {
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  // lighter 1
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;
  const colorMainL2 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 20}%)`;
  const cRef = useRef(null);
  const [transition, setTransition] = useState({});
  useEffect(() => {
    gsap.to(cRef.current, { backgroundColor: colorMainL1 });
    setTransition({
      hover: tHover(cRef.current, colorMainL2),
      click: tClick(cRef.current, colorMain),
    });
  }, [colorMain]);

  return (
    <SMenuSetting
      type="button"
      onClick={() => {
        onClick();
        transition.click.play().eventCallback('onComplete', () => {
          transition.click.reverse();
        });
      }}
      onMouseEnter={() => {
        transition.hover.play();
      }}
      onMouseLeave={() => {
        transition.hover.reverse();
      }}
      colorMainL1={colorMainL1}
      ref={cRef}
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
};

MenuSetting.defaultProps = {
  hasSwitch: false,
  onClick: () => {},
};

// == Export
export default MenuSetting;
