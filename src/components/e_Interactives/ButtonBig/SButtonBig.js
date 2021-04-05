import styled from 'styled-components';

import { buttonWidth, strokeWidth } from 'src/styles/g';

// initial css before comes in
export default styled.button`
  height: ${buttonWidth};
  width: ${buttonWidth};
  left: calc(${buttonWidth} * -1);
  .buttonBig__arrow--stroke {
    height: ${strokeWidth};
    top: calc(50% - ${strokeWidth} - 1px);
    background-color: ${(props) => props.colorMain};
  }
  .buttonBig__arrow--end {
    border-top-width: ${strokeWidth};
    border-right-width: ${strokeWidth};
    border-color: ${(props) => props.colorMain};
  }
`;

// new css after comes in
export const tIn = (tl, ref, color) => {
  tl.to(ref, {
    ease: 'out', left: 0, color,
  }).play();
  return tl;
};
