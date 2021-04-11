import styled from 'styled-components';

import { strokeWidth } from 'src/styles/g';
import { gsap } from 'gsap';

// initial css before comes in transition
export default styled.button`
border-top: ${strokeWidth} solid white;
background-color: ${(props) => props.colorMainL1}
`;

export const tHover = (ref, color) => {
  const tl = gsap.timeline({ paused: true, duration: 0.05 });
  tl.to(ref, {
    ease: 'out', backgroundColor: color,
  });
  return tl;
};

export const tClick = (ref, color) => {
  const tl = gsap.timeline({ paused: true, duration: 0.01 });
  tl.to(ref, {
    backgroundColor: color,
  });
  return tl;
};
