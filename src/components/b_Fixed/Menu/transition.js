import { gsap, Back } from 'gsap';

const contentToggle = (tl, ref) => {
  tl.to(ref, { paddingLeft: '0px', xPercent: 100, ease: 'inOut' }, 0).play();
  return tl;
};

// ease: Back.easeOut.config(1.7)

export { contentToggle };
