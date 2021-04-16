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

  const [animate, setAnimate] = useState({
    vMenuIcon: {},
    vIconT: vIconTB.animate,
    vIconM: { width: '75%', backgroundColor: colorMain },
    vIconB: vIconTB.animate,
  });

  const vMenuIcon = {
    animate: animate.vMenuIcon,
  };

  const vIconT = {
    initial: vIconTB.initial,
    animate: animate.vIconT,
  };

  const vIconM = {
    initial: { width: 0, backgroundColor: colorMain },
    animate: { width: '75%', backgroundColor: colorMain },
  };

  const vIconB = {
    initial: vIconTB.initial,
    animate: animate.vIconB,
  };

  useEffect(() => {
    setAnimate(!menuIsOpen ? {
      vMenuIcon: { backgroundColor: 'white' },
      vIconT: vIconTB.animate,
      vIconM: { width: '75%' },
      vIconB: vIconTB.animate,
    } : {
      vMenuIcon: { backgroundColor: colorMainL1 },
      vIconT: {
        transformOrigin: '100% 0%',
        width: '142%',
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        rotate: -45,
      },
      vIconM: vIconM.initial,
      vIconB: {
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
