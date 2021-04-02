// == Import npm
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import { menuIntoCloseIcon } from './transition';

const Menu = ({ color }) => {
  const cC = 'menu';
  const [menuOpen, setmenuOpen] = useState(false);

  const menuIconRef = useRef([]);

  const menuIntoCloseIconTl = menuIntoCloseIcon(menuIconRef, color);
  useEffect(() => {
    if (menuOpen) {
      menuIntoCloseIconTl.play();
    }
    else {
      menuIntoCloseIconTl.reverse();
    }
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
  color: PropTypes.string.isRequired,
};

// == Export
export default Menu;
