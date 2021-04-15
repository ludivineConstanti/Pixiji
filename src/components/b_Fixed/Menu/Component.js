// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

// == Import
import { contentMenuWidth } from 'src/styles/g';
import MenuIcon from './MenuIcon';
import MenuLink from './MenuLink';
import MenuSetting from './MenuSetting';
import SMenu, {
  SContent, SLinks, SContainer, SSettings, STitle,
} from './SMenu';

const Menu = ({
  colorMain, menuIsOpen, cheating, finishedQuiz, quizzesSlug, currentQuizId,
  updateValueGlobal, cheatingButtonFinishQuiz,
}) => {
  const variants = {
    initial: { left: `calc((${contentMenuWidth} + 10px) * -1)` },
    animate: { left: 0 },
  };

  const colorHsl = gsap.utils.splitColor(colorMain, true);
  const lighterMainColor = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  return (
    <SMenu>
      <AnimatePresence exitBeforeEnter>
        {menuIsOpen && (
        <SContent
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <SLinks>
            <SContainer>
              <MenuLink text="Home" path="" />
              <MenuLink text="Read me" path="read-me" />
              <MenuLink text="Quizzes" path={`quizzes/${quizzesSlug}`} />
              <MenuLink text="About" path="about" />
              <MenuLink text="404" path="404-not-found" />
            </SContainer>
          </SLinks>
          <SSettings
            style={{ color: lighterMainColor }}
          >
            <STitle>settings</STitle>
            <MenuSetting
              text="Cheat mode"
              hasSwitch
              color={lighterMainColor}
              onClick={() => {
                updateValueGlobal({ prop: ['cheating'], value: [!cheating] });
              }}
            />
            <MenuSetting
              text={finishedQuiz ? 'Restart quiz' : 'Finish quiz'}
              color={lighterMainColor}
              onClick={() => {
                cheatingButtonFinishQuiz({ quizId: currentQuizId });
              }}
            />
          </SSettings>
        </SContent>
        )}
      </AnimatePresence>
      <MenuIcon />
    </SMenu>
  );
};

Menu.propTypes = {
  colorMain: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  cheating: PropTypes.bool.isRequired,
  finishedQuiz: PropTypes.bool.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
  currentQuizId: PropTypes.number.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
  cheatingButtonFinishQuiz: PropTypes.func.isRequired,
};

// == Export
export default Menu;
