// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import { buttonMenuIconSize } from 'src/styles/g';
import SMenuIcon, { SIconContainer, SIconStroke } from './SMenuIcon';

const MenuIcon = ({
  colorMain, menuIsOpen, updateValueGlobal,
}) => {
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  const vIconTB = {
    initial: { width: 0, backgroundColor: colorMain },
    animate: { width: buttonMenuIconSize, alignSelf: 'flex-end', backgroundColor: colorMain },
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
    initial: { width: 0, backgroundColor: colorMain },
    animate: { width: '75%', backgroundColor: colorMain },
  });
  const [vIconB, setVIconB] = useState({
    initial: vIconTB.initial,
    animate: vIconTB.animate,
  });

  useEffect(() => {
    setVMenuIcon({
      ...vMenuIcon,
      animate: !menuIsOpen
        ? { backgroundColor: 'white' }
        : { backgroundColor: colorMainL1 },
    });
    setVIconT({
      ...vIconT,
      animate: !menuIsOpen
        ? vIconTB.animate
        : {
          transformOrigin: '100% 0%',
          width: '142%',
          backgroundColor: 'white',
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
          backgroundColor: 'white',
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
      s={{ colorMain }}
      variants={vMenuIcon}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <SIconContainer>
        <SIconStroke variants={vIconT} />
        <SIconStroke variants={vIconM} />
        <SIconStroke variants={vIconB} />
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
