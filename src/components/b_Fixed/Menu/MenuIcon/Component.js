// == Import npm
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

// == Import
import { buttonMenuIconSize } from 'src/styles/g';
import SMenuIcon, {
  SIconContainer, SIconTop, SIconTopI, SIconMiddle, SIconBottom,
  tHoverMenuIcon, tHoverCloseIcon, tClick,
} from './SMenuIcon';

const MenuIcon = ({
  colorMain, menuIsOpen, updateValueGlobal,
}) => {
  // need to have the timeline inside a hook
  // otherwise, it is recreated every time there is a change in the component's props
  const [transitionClick, setTransitionClick] = useState(
    gsap.timeline({ paused: true, duration: 0.2 }),
  );
  const [transition, setTransition] = useState({});

  const cRef = useRef([]);
  const colorHsl = gsap.utils.splitColor(colorMain, true);
  const colorMainL1 = `hsl(${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2] + 10}%)`;

  useEffect(() => {
    for (let i = 0; i < 3; i += 1) {
      gsap.to(cRef.current[i], { backgroundColor: colorMainL1 });
    }
    setTransition({
      hoverMenuIcon: tHoverMenuIcon(cRef, colorMainL1),
      hoverCloseIcon: tHoverCloseIcon(cRef, colorMainL1),
    });
    setTransitionClick(tClick(transitionClick, cRef, colorMain));
  }, [colorMain]);

  useEffect(() => {
    setTransitionClick(transitionClick.reversed(!menuIsOpen));
  }, [menuIsOpen]);

  return (
    <SMenuIcon
      type="button"
      onClick={() => {
        updateValueGlobal({ prop: ['menuIsOpen'], value: [!menuIsOpen] });
        transitionClick.play();
      }}
      onMouseOver={() => {
        if (menuIsOpen) transition.hoverCloseIcon.play();
        else transition.hoverMenuIcon.play();
      }}
      onMouseLeave={() => {
        if (menuIsOpen) transition.hoverCloseIcon.reverse();
        else transition.hoverMenuIcon.reverse();
      }}
      ref={(e) => cRef.current.push(e)}
      s={{ colorMain }}
    >
      <SIconContainer ref={(e) => cRef.current.push(e)}>
        <SIconTop
          initial={SIconTopI}
          animate={{ width: buttonMenuIconSize }}
          ref={(e) => cRef.current.push(e)}
          s={{ colorMain }}
        />
        <SIconMiddle
          animate={{ width: `calc(${buttonMenuIconSize}* 0.75)` }}
          ref={(e) => cRef.current.push(e)}
        />
        <SIconBottom
          animate={{ width: buttonMenuIconSize, color: colorMain }}
          ref={(e) => cRef.current.push(e)}
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
