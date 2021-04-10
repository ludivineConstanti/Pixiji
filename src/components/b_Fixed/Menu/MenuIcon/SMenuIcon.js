import styled from 'styled-components';
import { gsap } from 'gsap';

import { buttonWidth, buttonMenuIconSize, strokeWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled.button`
  height: ${buttonWidth};
  width: ${buttonWidth};
  .menuIcon__container {
    height: ${buttonMenuIconSize};
    width: ${buttonMenuIconSize};
  }
  .menuIcon__top, .menuIcon__middle, .menuIcon__bottom {
    background-color: ${(props) => (props.colorMain)};
    height: ${strokeWidth};
  }
  .menuIcon__middle {
    width: calc(${buttonMenuIconSize}* 0.75);
  }
  .menuIcon__top, .menuIcon__bottom {
    width: ${buttonMenuIconSize};
  }
`;

// ref is an array
// ref[0] = icon stroke top
// ref[1] = icon stroke middle
// ref[2] = icon stroke bottom
// ref[3] = rectangle containing the icon
// ref[4] = biggest rectangle surrounding everything
export const tHoverMenuIcon = (ref, color) => {
  const tl = gsap.timeline({ paused: true, duration: 0.1, ease: 'inOut' });
  tl.to(ref.current[4], {
    scale: 0.9,
  }, 0)
    .to(ref.current[0], {
      backgroundColor: color,
    }, 0).to(ref.current[1], {
      backgroundColor: color,
    }, 0).to(ref.current[2], {
      backgroundColor: color,
    }, 0);
  return tl;
};

export const tHoverCloseIcon = (ref, color) => {
  const tl = gsap.timeline({ paused: true, duration: 0.1, ease: 'inOut' });
  tl.to(ref.current[4], {
    backgroundColor: color,
  });
  return tl;
};

// new css after toggle is activated
export const tClick = (ref, color) => {
  const tl = gsap.timeline({ paused: true, duration: 0.2 });
  // 0 at the end of each "to" makes all of them start at the beginning

  // background = biggest container square
  // need to use from to for the width and the height
  // cause otherwise it takes the values in px when it changes back
  // and since we're using vw, it doesn't work well with resizing
  tl.to(ref.current[4], {
    scale: 0.7,
    backgroundColor: color,
  }, 0);
  // div containing the 3 strokes
  tl.to(ref.current[3], {
    scale: 1.5,
    ease: 'power1.out',
  }, 0);
  // first stroke turns into cross
  tl.to(ref.current[0], {
    backgroundColor: 'white',
    // transformOrigin: '0% 0%',
    y: 20,
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
    y: -20,
    rotation: '315_ccw',
    ease: 'power1.out',
  }, 0);
  return tl;
};
