// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMotionValue } from 'framer-motion';
import { Color } from 'framer';

// == Import
import { SStarContainer } from './SStars';
import { createStar, createVStar, createTranslate } from './helpers';

// Ref for animation => https://framerbook.com/animation/example-animations/24-cursor/

const Stars = ({ color }) => {
  const colorL1 = Color.toHexString(Color.lighten(Color(color), 15));
  // Need to put the stars in a hook, otherwise redraw it all the time
  const [starsObj, setStarsObj] = useState({});
  const vStar = {
    s: createVStar([1, 0.5], [color, colorL1], 250),
    m: createVStar([0.75, 1], [colorL1, color], 500),
    l: createVStar([1, 0.9], [color, colorL1], 7500),
  };
  // choose 95 instead of 100 so that it doesn't go off screen
  // (have to take into account the width of height of the stars themselves)
  // x and y that the event listener will update
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const arrStars = { s: [], m: [], l: [] };

    for (let i = 0; i < 11; i += 1) {
      createStar(arrStars.s, 0.25, vStar.s, `sStar${i}`, color);
      if (i >= 6) {
        createStar(arrStars.m, 0.5, vStar.m, `mStar${i}`, color);
      }
      if (i >= 7) {
        createStar(arrStars.l, 1, vStar.l, `lStar${i}`, color);
      }
    }

    setStarsObj({ s: arrStars.s, m: arrStars.m, l: arrStars.l });

    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const translateX = createTranslate(x, window.innerWidth, 35);
  const translateY = createTranslate(y, window.innerHeight, 35);
  const tXM = createTranslate(x, window.innerWidth, 22.5);
  const tYM = createTranslate(y, window.innerHeight, 22.5);
  const tXL = createTranslate(x, window.innerWidth, 10);
  const tYL = createTranslate(y, window.innerHeight, 10);

  return (
    <>
      <SStarContainer
        key="starContainerS"
        style={{ translateX, translateY }}
        init="init"
        animate="animate"
        exit="init"
      >{ starsObj.s }
      </SStarContainer>
      <SStarContainer
        key="starContainerM"
        style={{ translateX: tXM, translateY: tYM }}
        init="init"
        animate="animate"
        exit="init"
      >{ starsObj.m}
      </SStarContainer>
      <SStarContainer
        key="starContainerL"
        style={{ translateX: tXL, translateY: tYL }}
        init="init"
        animate="animate"
        exit="init"
      >{ starsObj.l }
      </SStarContainer>
    </>
  );
};

Stars.propTypes = {
  color: PropTypes.string.isRequired,
};

// == Export
export default Stars;
