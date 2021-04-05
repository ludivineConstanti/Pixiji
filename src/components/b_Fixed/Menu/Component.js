// == Import npm
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import './style.scss';
import { contentToggle } from './transition';
import MenuIcon from './MenuIcon';
import MenuLink from './MenuLink';
import MenuSetting from './MenuSetting';
import SMenu from './SMenu';

const Menu = ({
  colorMain, menuIsOpen, cheating, updateValueGlobal, cheatingButtonFinishQuiz,
}) => {
  const cC = 'menu';

  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [contentTransition, setContentTransition] = useState(
    gsap.timeline({ paused: true, duration: 0.35 }),
  );
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  const lighterMainColor = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  const menuContentRef = useRef(null);

  useEffect(() => {
    setContentTransition(contentToggle(contentTransition, menuContentRef.current));
  }, []);

  useEffect(() => {
    contentTransition.reversed(!menuIsOpen);
  }, [menuIsOpen]);

  return (
    <div className={cC}>
      <div className={`${cC}__content`} ref={menuContentRef}>
        <nav className={`${cC}__content__links`}>
          <ul className={`${cC}__content__links__container`}>
            <MenuLink text="Home" path="" />
            <MenuLink text="Quizzes" path="quizzes" />
            <MenuLink text="About" path="about" />
          </ul>
        </nav>
        <div
          className={`${cC}__content__settings`}
          style={{ color: lighterMainColor }}
        >
          <h1 className={`${cC}__content__settings__title`}>settings</h1>
          <MenuSetting
            text="Cheat mode"
            hasSwitch
            color={lighterMainColor}
            onClick={() => {
              updateValueGlobal({ obj: 'current', prop: ['cheating'], value: [!cheating] });
            }}
          />
          <MenuSetting
            text="Finish quiz"
            color={lighterMainColor}
            onClick={cheatingButtonFinishQuiz}
          />
        </div>
      </div>
      <MenuIcon />
    </div>
  );
};

Menu.propTypes = {
  colorMain: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  cheating: PropTypes.bool.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
  cheatingButtonFinishQuiz: PropTypes.func.isRequired,
};

// == Export
export default Menu;
