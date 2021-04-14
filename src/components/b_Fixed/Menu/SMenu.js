import styled from 'styled-components';

import { zImenu, contentMenuWidth } from 'src/styles/g';
import { tMenuSettingsTitle } from 'src/styles/typo';

// initial css before comes in transition
export default styled.div`
z-index: ${zImenu};
position: fixed;
`;
export const SContent = styled.div`
  left: calc(${contentMenuWidth} * -1);
  width: ${contentMenuWidth};
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
// flex grow => takes maximum height available
export const SLinks = styled.nav`
  flex-grow : 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const SSettings = styled.div``;
export const STitle = styled.h1`
  ${tMenuSettingsTitle}
  margin-left: 24px;
  margin-bottom: 12px;
`;

export const contentToggle = (tl, ref) => {
  tl.to(ref, { left: 0, ease: 'inOut' }).play();
  return tl;
};
