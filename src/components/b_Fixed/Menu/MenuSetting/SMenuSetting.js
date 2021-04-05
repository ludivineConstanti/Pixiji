import styled from 'styled-components';

import { strokeWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled.button`
border-top: ${strokeWidth} solid white;
background-color: ${(props) => props.colorMainL1}
`;

export const tHover = (tl, ref, color) => {
  tl.to(ref, {
    ease: 'out', backgroundColor: color,
  });
  return tl;
};

export const tClick = (tl, ref, color) => {
  tl.to(ref, {
    backgroundColor: color,
  });
  return tl;
};
