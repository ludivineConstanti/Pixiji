import styled from 'styled-components';
import { gsap } from 'gsap';

import { strokeWidth } from 'src/styles/g';
import { tMenuSetting } from 'src/styles/typo';

// initial css before comes in transition
export default styled.button`
  ${tMenuSetting}
  border: ${strokeWidth} solid white;
  border-top: 0 solid white;
  background-color: ${(props) => props.s.colorMain};
  color: white;
  width: 100%;
  padding: 24px;
  text-align: left;
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
