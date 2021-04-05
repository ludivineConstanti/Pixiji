// == Import npm
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import SMenuSetting, { tHover, tClick } from './SMenuSetting';

const MenuSetting = ({
  text, hasSwitch, onClick, colorMain,
}) => {
  const cC = 'menuSetting';
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  // lighter 1
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;
  const colorMainL2 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 20}%)`;
  const cRef = useRef(null);
  const [transition, setTransition] = useState({
    hover: gsap.timeline({ paused: true, duration: 0.05 }),
    click: gsap.timeline({ paused: true, duration: 0.01 }),
  });
  useEffect(() => {
    setTransition({
      hover: tHover(transition.hover, cRef.current, colorMainL2),
      click: tClick(transition.click, cRef.current, colorMain),
    });
  }, []);

  return (
    <SMenuSetting
      className={cC}
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
