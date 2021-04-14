import styled from 'styled-components';
import { gsap } from 'gsap';

import { buttonWidth, buttonMenuIconSize, strokeWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled.button`
  height: ${buttonWidth};
  width: ${buttonWidth};
  position: fixed;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SIconContainer = styled.div`
  height: ${buttonMenuIconSize};
  width: ${buttonMenuIconSize};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const iconS = `
  background-color: ${(props) => (props.colorMain)};
  height: ${strokeWidth};
  `;

const iconSTB = `
  width: ${buttonMenuIconSize};
`;

export const SIconTop = styled.div`
  ${iconS}
  ${iconSTB}
`;

export const SIconMiddle = styled.div`
  ${iconS}
  width: calc(${buttonMenuIconSize}* 0.75);
`;

export const SIconBottom = styled.div`
  ${iconS}
  ${iconSTB}
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
export const tClick = (tl, ref, color) => {
  // 0 at the end of each "to" makes all of them start at the beginning

  // background = biggest container square
  // need to use from to for the width and the height
  // cause otherwise it takes the values in px when it changes back
  // and since we're using vw, it doesn't work well with resizing
  tl.to(ref.current[4], {
    scale: 0.7,
    backgroundColor: color,
  });
  // div containing the 3 strokes
  tl.to(ref.current[3], {
    scale: 1.5,
    ease: 'power1.out',
  }, 0);
  // first stroke turns into cross
  tl.to(ref.current[0], {
    scaleX: 1.35,
    backgroundColor: 'white',
    transformOrigin: '0% 0%',
    rotation: '45_cw',
    ease: 'power1.out',
  }, 0);
  // second stroke disappears
  tl.to(ref.current[1], {
    scale: 0,
    ease: 'power1.out',
  }, 0);
  // third stroke turns into cross
  tl.to(ref.current[2], {
    scaleX: 1.35,
    backgroundColor: 'white',
    transformOrigin: '0% 100%',
    rotation: '315_ccw',
    ease: 'power1.out',
  }, 0);
  return tl;
};
