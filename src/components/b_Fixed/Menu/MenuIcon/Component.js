// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import SMenuIcon, { SIconContainer, SIconStroke } from './SMenuIcon';
import {
  iVIconT, iVIconM, iVIconB, aVIconT, aVIconM, aVIconB,
} from './animation';

const MenuIcon = ({
  colorMainL1, colorMain, menuIsOpen, updateValueGlobal,
}) => {
  const [vMenuIcon, setVMenuIcon] = useState({});
  const [vIcon, setVIcon] = useState({ t: iVIconT, m: iVIconM, b: iVIconB });

  useEffect(() => {
    setVIcon({
      t: { ...vIcon.t, animate: !menuIsOpen ? aVIconT.menuCloses : aVIconT.menuOpens },
      m: { ...vIcon.m, animate: !menuIsOpen ? aVIconM.menuCloses : aVIconM.menuOpens },
      b: { ...vIcon.b, animate: !menuIsOpen ? aVIconB.menuCloses : aVIconB.menuOpens },
    });
  }, [menuIsOpen, colorMain]);

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !menuIsOpen
        ? { backgroundColor: '#fff' }
        : { backgroundColor: colorMain },
    });
  }, [menuIsOpen]);

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !menuIsOpen
        ? { backgroundColor: '#fff' }
        : { backgroundColor: colorMainL1 },
    });
  }, [colorMain]);

  return (
    <SMenuIcon
      type="button"
      onClick={() => {
        updateValueGlobal({ prop: ['menuIsOpen'], value: [!menuIsOpen] });
      }}
      variants={vMenuIcon}
      initial="initial"
      animate="animate"
      onMouseEnter={() => {
        if (menuIsOpen) {
          setVMenuIcon({
            ...vMenuIcon,
            animate: { backgroundColor: colorMain },
          });
        }
      }}
      onMouseLeave={() => {
        if (menuIsOpen) {
          setVMenuIcon({
            ...vMenuIcon,
            animate: { backgroundColor: colorMainL1 },
          });
        }
      }}
    >
      <SIconContainer>
        <SIconStroke variants={vIcon.t} s={{ colorMain: menuIsOpen ? '#FFF' : colorMain }} key="SIconStrokeTop" />
        <SIconStroke variants={vIcon.m} s={{ colorMain }} key="SIconStrokeMiddle" />
        <SIconStroke variants={vIcon.b} s={{ colorMain: menuIsOpen ? '#FFF' : colorMain }} key="SIconStrokeBottom" />
      </SIconContainer>
    </SMenuIcon>
  );
};

MenuIcon.propTypes = {
  colorMainL1: PropTypes.string.isRequired,
  colorMain: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
};

// == Export
export default MenuIcon;
