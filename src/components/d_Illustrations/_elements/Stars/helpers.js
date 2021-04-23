import React from 'react';
import { useTransform } from 'framer-motion';

import { SStar } from './SStars';

export const createStar = (array, size, variants, key, color) => {
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

export const createVStar = (scaleArr, colorArr, mass) => ({
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

export const createTranslate = (xOrY, heightOrWidth, val) => (
  useTransform(xOrY, [0, heightOrWidth], [val, -val])
);
