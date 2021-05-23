import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  zImenu, contentMenuWidth, buttonWidth, breakPointD,
} from 'src/styles/g';
import { tMenuSettingsTitle } from 'src/styles/typo';

export const variants = {
  initial: { left: `calc((${contentMenuWidth} + 10px) * -1)` },
  animate: { left: 0 },
};

// initial css before comes in transition
export default styled.div`
z-index: ${zImenu};
position: fixed;
`;
export const SContent = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  ${breakPointD} {
    width: ${contentMenuWidth};
  }

`;
// flex grow => takes maximum height available
export const SLinks = styled.nav`
  margin-top: calc(${buttonWidth} / 2);
  flex-grow : 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakPointD} {
    align-items: flex-start;
    margin-left: ${buttonWidth};
  }
`;
export const SContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const STitle = styled.h1`
  ${tMenuSettingsTitle}
  margin-left: 24px;
  margin-bottom: 12px;
  color: ${(props) => props.s.colorMainL1};
`;
