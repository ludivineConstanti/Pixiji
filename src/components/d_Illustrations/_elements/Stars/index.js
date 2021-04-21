// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMotionValue, useTransform } from 'framer-motion';
import { Color } from 'framer';

// == Import
import { SStar, SStarContainer } from './SStars';

// Ref for animation => https://framerbook.com/animation/example-animations/24-cursor/

const Stars = ({ color }) => {
  const createVStar = (scaleArr, colorArr, mass) => ({
    init: { scale: 0 },
    animate: {
      scale: scaleArr,
      backgroundColor: colorArr,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        mass,
      },
    },
  });

  const colorL1 = Color.toHexString(Color.lighten(Color(color), 15));

  const vStarS = createVStar([1, 0.5], [color, colorL1], 250);
  const vStarM = createVStar([0.75, 1], [colorL1, color], 500);
  const vStarL = createVStar([1, 0.9], [color, colorL1], 7500);

  const createStar = (array, size, variants, key) => {
    const top = Math.random() * 95;
    const left = Math.random() * 95;
    array.push(<SStar
      s={{
        size, color, top, left,
      }}
      variants={variants}
      key={key}
    />);
  };

  // Need to put the stars in a hook, otherwise redraw it all the time
  const [starsObj, setStarsObj] = useState({});
  // choose 95 instead of 100 so that it doesn't go off screen
  // (have to take into account the width of height of the stars themselves)
  // x and y that the event listener will update
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    console.log('listening');
    x.set(e.clientX);
    y.set(e.clientY);
  };

  useEffect(() => {
    const arrStarsS = [];
    const arrStarsM = [];
    const arrStarsL = [];

    for (let i = 0; i < 11; i += 1) {
      createStar(arrStarsS, 0.25, vStarS, `sStar${i}`);
      if (i >= 6) {
        createStar(arrStarsM, 0.5, vStarM, `mStar${i}`);
      }
      if (i >= 7) {
        createStar(arrStarsL, 1, vStarL, `lStar${i}`);
      }
    }

    setStarsObj({ s: arrStarsS, m: arrStarsM, l: arrStarsL });

    document.addEventListener('mousemove', (e) => {
      handleMouseMove(e);
    });
  }, []);

  const createTranslate = (xOrY, val) => (
    useTransform(xOrY, [0, window.innerWidth], [val, -val])
  );

  const translateX = createTranslate(x, 35);
  const translateY = createTranslate(y, 35);
  const tXM = createTranslate(x, 22.5);
  const tYM = createTranslate(y, 22.5);
  const tXL = createTranslate(x, 10);
  const tYL = createTranslate(y, 10);

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
