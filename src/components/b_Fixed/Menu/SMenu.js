import styled from 'styled-components';

import { zImenu, contentMenuWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled.div`
z-index: ${zImenu};
.menu__content {
  left: calc(${contentMenuWidth} * -1);
  width: ${contentMenuWidth};
}
`;
export const contentToggle = (tl, ref) => {
  tl.to(ref, { paddingLeft: '0px', left: 0, ease: 'inOut' }, 0).play();
  return tl;
};
