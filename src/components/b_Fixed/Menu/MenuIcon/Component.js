// == Import npm
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import { buttonMenuIconSize } from 'src/styles/g';
import SMenuIcon, {
  SIconContainer, SIconStroke, tClick,
} from './SMenuIcon';

const MenuIcon = ({
  colorMain, menuIsOpen, updateValueGlobal,
}) => {
  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [transitionClick, setTransitionClick] = useState(
    gsap.timeline({ paused: true, duration: 0.2 }),
  );

  const cRef = useRef([]);
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  useEffect(() => {
    for (let i = 0; i < 3; i += 1) {
      gsap.to(cRef.current[i], { backgroundColor: colorMainL1 });
    }
    setTransitionClick(tClick(transitionClick, cRef, colorMain));
  }, [colorMain]);

  useEffect(() => {
    setTransitionClick(transitionClick.reversed(!menuIsOpen));
  }, [menuIsOpen]);

  const sWidth = `calc(${buttonMenuIconSize}* 0.75)`;

  const vIconTB = {
    initial: { width: 0 },
    animate: { width: buttonMenuIconSize, alignSelf: 'flex-end' },
    whileHover: {
      width: '75%',
      transition: {
        yoyo: Infinity,
        stiffness: 1,
      },
    },
  };

  const vIconM = {
    initial: { width: 0 },
    animate: { width: sWidth },
    whileHover: {
      width: '100%',
      transition: {
        yoyo: Infinity,
        stiffness: 1,
      },
    },
  };

  return (
    <SMenuIcon
      type="button"
      onClick={() => {
        updateValueGlobal({ prop: ['menuIsOpen'], value: [!menuIsOpen] });
        transitionClick.play();
      }}
      ref={(e) => cRef.current.push(e)}
      s={{ colorMain }}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      <SIconContainer ref={(e) => cRef.current.push(e)}>
        <SIconStroke
          ref={(e) => cRef.current.push(e)}
          s={{ colorMain }}
          variants={vIconTB}
        />
        <SIconStroke
          s={{ colorMain }}
          ref={(e) => cRef.current.push(e)}
          variants={vIconM}
        />
        <SIconStroke
          ref={(e) => cRef.current.push(e)}
          s={{ colorMain }}
          variants={vIconTB}
        />
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
