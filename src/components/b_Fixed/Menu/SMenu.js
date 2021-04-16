import styled from 'styled-components';
import { motion } from 'framer-motion';

import { zImenu, contentMenuWidth, buttonWidth } from 'src/styles/g';
import { tMenuSettingsTitle } from 'src/styles/typo';

// initial css before comes in transition
export default styled.div`
z-index: ${zImenu};
position: fixed;
`;
export const SContent = styled(motion.div)`
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
margin-top: calc(${buttonWidth} / 2);
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
