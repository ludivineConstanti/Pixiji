// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import SMenuIcon, { SIconContainer, SIconStroke } from './SMenuIcon';

const MenuIcon = ({
  colorMainL1, colorMain, menuIsOpen, updateValueGlobal,
}) => {
  const vIconTB = {
    initial: { width: 0 },
    animate: { width: '100%', alignSelf: 'flex-end' },
  };

  const [vMenuIcon, setVMenuIcon] = useState({});

  const [vIconT, setVIconT] = useState({
    initial: vIconTB.initial,
    animate: vIconTB.animate,
  });
  const [vIconM, setVIconM] = useState({
    initial: { width: 0 },
    animate: { width: '75%' },
  });
  const [vIconB, setVIconB] = useState({
    initial: vIconTB.initial,
    animate: vIconTB.animate,
  });
  const transitionMenuHover = {
    repeat: Infinity,
    repeatType: 'mirror',
    mass: 2,
  };

  useEffect(() => {
    setVIconT({
      ...vIconT,
      animate: !menuIsOpen
        ? vIconTB.animate
        : {
          transformOrigin: '100% 0%',
          width: '142%',
          alignSelf: 'flex-end',
          rotate: -45,
        },
    });
    setVIconM({
      ...vIconM,
      animate: !menuIsOpen ? { width: '75%' } : vIconM.initial,
    });
    setVIconB({
      ...vIconB,
      animate: !menuIsOpen
        ? vIconTB.animate
        : {
          transformOrigin: '100% 100%',
          width: '142%',
          alignSelf: 'flex-end',
          rotate: 45,
        },
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
        else {
          setVIconT({ animate: { width: '20px' } });
          setVIconM({
            ...vIconM,
            animate: { ...vIconM.initial, width: '100%', transition: transitionMenuHover },
          });
          setVIconB({
            ...vIconB,
            animate: { ...vIconTB.animate, width: '75%', transition: transitionMenuHover },
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
        <SIconStroke variants={vIconT} s={{ colorMain: menuIsOpen ? '#FFF' : colorMain }} key="SIconStrokeTop" />
        <SIconStroke variants={vIconM} s={{ colorMain }} key="SIconStrokeMiddle" />
        <SIconStroke variants={vIconB} s={{ colorMain: menuIsOpen ? '#FFF' : colorMain }} key="SIconStrokeBottom" />
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
