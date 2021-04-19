// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

// == Import
import { contentMenuWidth } from 'src/styles/g';
import MenuIcon from './MenuIcon';
import MenuLink from './MenuLink';
import MenuSetting from './MenuSetting';
import SMenu, {
  SContent, SLinks, SContainer, STitle,
} from './SMenu';

const Menu = ({
  isPlaying, colorMainL1, menuIsOpen, cheating, finishedQuiz, quizzesSlug, currentQuizId,
  updateValueGlobal, cheatingButtonFinishQuiz,
}) => {
  const variants = {
    initial: { left: `calc((${contentMenuWidth} + 10px) * -1)` },
    animate: { left: 0 },
  };

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
              <MenuLink text="Home" path="/" />
              <MenuLink text="Read me" path="/read-me" />
              <MenuLink text="Quizzes" path={`/quizzes/${quizzesSlug}`} />
              <MenuLink text="About" path="/about" />
              <MenuLink text="404" path="/404-not-found" />
            </SContainer>
          </SLinks>
          <div>
            <STitle s={{ colorMainL1 }}>settings</STitle>
            <MenuSetting
              text="Cheat mode"
              hasSwitch
              onClick={() => {
                updateValueGlobal({ prop: ['cheating'], value: [!cheating] });
              }}
            />
            {isPlaying && (
            <MenuSetting
              text={finishedQuiz ? 'Restart quiz' : 'Finish quiz'}
              onClick={() => {
                cheatingButtonFinishQuiz({ quizId: currentQuizId });
              }}
            />
            )}
          </div>
        </SContent>
        )}
      </AnimatePresence>
      <MenuIcon />
    </SMenu>
  );
};

Menu.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  colorMainL1: PropTypes.string.isRequired,
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
