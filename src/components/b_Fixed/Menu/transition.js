import { gsap } from 'gsap';

const menuIntoCloseIcon = (menuIconRef, color) => {
  // 0 at the end of each "to" makes all of them start at the beginning
  const tl = gsap.timeline({ paused: true });
  // background
  tl.to(menuIconRef.current[4], {
    margin: '24px',
    height: '80px',
    width: '80px',
    backgroundColor: color,
    ease: 'power1.inOut',
  }, 0);
  // div containing the 3 strokes
  tl.to(menuIconRef.current[3], {
    height: '80px',
    width: '80px',
    padding: '18px',
    ease: 'power1.out',
  }, 0);
  // first stroke turns into cross
  tl.to(menuIconRef.current[0], {
    backgroundColor: 'white',
    transformOrigin: '0% 0%',
    width: '61px',
    rotation: '45_cw',
    ease: 'power1.out',
  }, 0);
  // second stroke disappears
  tl.to(menuIconRef.current[1], {
    width: 0,
    height: 0,
    ease: 'power1.out',
  }, 0);
  // third stroke turns into cross
  tl.to(menuIconRef.current[2], {
    backgroundColor: 'white',
    transformOrigin: '0% 100%',
    width: '61px',
    rotation: '315_ccw',
    ease: 'power1.out',
  }, 0);
  return tl;
};

const menucontentComesIn = () => {
  const tl = gsap.timeline({ paused: true });
  return tl;
};

export { menuIntoCloseIcon, menucontentComesIn };
