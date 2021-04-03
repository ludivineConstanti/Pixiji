// == Import npm
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import { menuIntoCloseIcon } from './transition';

const Menu = ({ colorMain }) => {
  const cC = 'menu';
  const [menuOpen, setmenuOpen] = useState(false);

  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [transition, setTransition] = useState(gsap.timeline({ paused: true }));

  const menuIconRef = useRef([]);

  useEffect(() => {
    setTransition(menuIntoCloseIcon(transition, menuIconRef, colorMain));
  }, []);

  useEffect(() => {
    transition.reversed(!menuOpen);
  }, [menuOpen]);

  return (
    <div className={cC}>
      {menuOpen
      && (
      <div className={`${cC}__content`}>
        sds
      </div>
      )}
      <button
        className={`${cC}__icon__container`}
        type="button"
        onClick={() => {
          setmenuOpen(!menuOpen);
        }}
        ref={(e) => menuIconRef.current.push(e)}
      >
        <div className={`${cC}__icon`} ref={(e) => menuIconRef.current.push(e)}>
          <div className={`${cC}__icon__top`} ref={(e) => menuIconRef.current.push(e)} />
          <div className={`${cC}__icon__middle`} ref={(e) => menuIconRef.current.push(e)} />
          <div className={`${cC}__icon__bottom`} ref={(e) => menuIconRef.current.push(e)} />
        </div>
      </button>
    </div>
  );
};

Menu.propTypes = {
  colorMain: PropTypes.string.isRequired,
};

// == Export
export default Menu;
