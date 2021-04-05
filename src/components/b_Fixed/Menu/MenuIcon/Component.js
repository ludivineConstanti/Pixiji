// == Import npm
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import SMenuIcon, { tToggle } from './SMenuIcon';

const MenuIcon = ({
  colorMain, menuIsOpen, updateValueGlobal,
}) => {
  const cC = 'menuIcon';

  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [transitionToggle, setTransitionToggle] = useState(gsap.timeline(
    { paused: true, duration: 0.35 },
  ));

  const componentRef = useRef([]);

  useEffect(() => {
    setTransitionToggle(tToggle(transitionToggle, componentRef, colorMain));
  }, []);

  useEffect(() => {
    transitionToggle.reversed(!menuIsOpen);
  }, [menuIsOpen]);

  return (
    <SMenuIcon
      className={`${cC}`}
      type="button"
      onClick={() => {
        updateValueGlobal({ obj: 'UI', prop: ['menuIsOpen'], value: [!menuIsOpen] });
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
