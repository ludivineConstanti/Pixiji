// == Import npm
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import SMenuIcon, { tHoverMenuIcon, tHoverCloseIcon, tClick } from './SMenuIcon';

const MenuIcon = ({
  colorMain, menuIsOpen, updateValueGlobal,
}) => {
  const cC = 'menuIcon';

  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [transition, setTransition] = useState({
    hoverMenuIcon: gsap.timeline({ paused: true, duration: 0.1, ease: 'inOut' }),
    hoverCloseIcon: gsap.timeline({ paused: true, duration: 0.1, ease: 'inOut' }),
    click: gsap.timeline({ paused: true, duration: 0.2 }),
  });

  const componentRef = useRef([]);
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  useEffect(() => {
    setTransition({
      hoverMenuIcon: tHoverMenuIcon(transition.hoverMenuIcon, componentRef, colorMainL1),
      hoverCloseIcon: tHoverCloseIcon(transition.hoverCloseIcon, componentRef, colorMainL1),
      click: tClick(transition.click, componentRef, colorMain),
    });
  }, []);

  useEffect(() => {
    transition.click.reversed(!menuIsOpen);
  }, [menuIsOpen]);

  return (
    <SMenuIcon
      className={`${cC}`}
      type="button"
      onClick={() => {
        updateValueGlobal({ obj: 'UI', prop: ['menuIsOpen'], value: [!menuIsOpen] });
      }}
      onMouseOver={() => {
        if (menuIsOpen) transition.hoverCloseIcon.play();
        else transition.hoverMenuIcon.play();
      }}
      onMouseLeave={() => {
        if (menuIsOpen) transition.hoverCloseIcon.reverse();
        else transition.hoverMenuIcon.reverse();
      }}
      ref={(e) => componentRef.current.push(e)}
      colorMain={colorMain}
    >
      <div className={`${cC}__container`} ref={(e) => componentRef.current.push(e)}>
        <div className={`${cC}__top`} ref={(e) => componentRef.current.push(e)} />
        <div className={`${cC}__middle`} ref={(e) => componentRef.current.push(e)} />
        <div className={`${cC}__bottom`} ref={(e) => componentRef.current.push(e)} />
      </div>
    </SMenuIcon>
  );
};

MenuIcon.propTypes = {
  colorMain: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
};

// == Export
export default MenuIcon;
