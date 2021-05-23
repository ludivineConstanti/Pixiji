import { zISquareHover } from 'src/styles/g';
import { aAnimateOn } from 'src/components/d_Illustrations/_helpers/animation';

export default {
  initial: { scale: 0 },
  animateOff: { scale: 0.25 },
  animateOn: aAnimateOn,
  whileHoverOff: {},
  whileHoverOn: { scale: 1.5, zIndex: zISquareHover },
};
