import styled from 'styled-components';

import { buttonWidth, strokeWidth } from 'src/styles/g';

// initial css before comes in
export default styled.button`
  height: ${buttonWidth};
  width: ${buttonWidth};
  left: calc(${buttonWidth} * -1);
  .buttonBig--stroke {
    height: ${strokeWidth};
    top: calc(50% - ${strokeWidth} - 1px);
  }
  .buttonBig--end {
    border-top-width: ${strokeWidth};
    border-right-width: ${strokeWidth};
  }
`;

// new css after comes in
export const tIn = (tl, ref, color) => {
  tl.to(ref, {
    ease: 'out', left: 0, color,
  }).play();
  return tl;
};
