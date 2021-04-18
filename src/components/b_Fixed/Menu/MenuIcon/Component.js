// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Color } from 'framer';

// == Import
import { buttonMenuIconSize } from 'src/styles/g';
import SMenuIcon, { SIconContainer, SIconStroke } from './SMenuIcon';

const MenuIcon = ({
  colorMain, menuIsOpen, updateValueGlobal,
}) => {
  // convert to rgb / hsl, lighten and convert back to hex code
  const colorMainL1 = Color.toHexString(Color.lighten(Color(colorMain), 10));

  const vIconTB = {
    initial: { width: 0 },
    animate: { width: buttonMenuIconSize, alignSelf: 'flex-end' },
  };

  const [vMenuIcon, setVMenuIcon] = useState({
    animate: {},
    whileHover: {},
  });

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

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !menuIsOpen
        ? { backgroundColor: '#fff' }
        : { backgroundColor: colorMainL1 },
    });
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

  return (
    <SMenuIcon
      type="button"
      onClick={() => {
        updateValueGlobal({ prop: ['menuIsOpen'], value: [!menuIsOpen] });
      }}
      variants={vMenuIcon}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
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
  colorMain: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
};

// == Export
export default MenuIcon;
