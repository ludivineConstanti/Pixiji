import { gsap, Back } from 'gsap';

const menuIntoCloseIcon = (tl, ref, color) => {
  // 0 at the end of each "to" makes all of them start at the beginning

  // background
  tl.to(ref.current[4], {
    margin: '24px',
    height: '80px',
    width: '80px',
    backgroundColor: color,
    ease: 'power1.inOut',
  }, 0);
  // div containing the 3 strokes
  tl.to(ref.current[3], {
    height: '80px',
    width: '80px',
    padding: '18px',
    ease: 'power1.out',
  }, 0);
  // first stroke turns into cross
  tl.to(ref.current[0], {
    backgroundColor: 'white',
    transformOrigin: '0% 0%',
    width: '61px',
    rotation: '45_cw',
    ease: 'power1.out',
  }, 0);
  // second stroke disappears
  tl.to(ref.current[1], {
    width: 0,
    height: 0,
    ease: 'power1.out',
  }, 0);
  // third stroke turns into cross
  tl.to(ref.current[2], {
    backgroundColor: 'white',
    transformOrigin: '0% 100%',
    width: '61px',
    rotation: '315_ccw',
    ease: 'power1.out',
  }, 0).play();
  return tl;
};

const menucontentComesIn = (tl, ref) => {
  tl.to(ref, { paddingLeft: '0px', xPercent: 100, ease: 'inOut' }, 0).play();
  return tl;
};

// ease: Back.easeOut.config(1.7)

export { menuIntoCloseIcon, menucontentComesIn };
