import styled from 'styled-components';
import { motion } from 'framer-motion';

import { contentL, breakPointT, buttonWidth } from 'src/styles/g';
import { tTitle, tText } from 'src/styles/typo';

// initial css before comes in transition
export default styled(motion.main)`
  ${contentL}
`;

export const STitle = styled(motion.h1)`
  ${tTitle}
  margin-bottom: 24px;
  margin-right: calc(${buttonWidth} / 2);
  position: relative;
  ${breakPointT} {
    margin-right: 0;
  }
`;

export const SSquareTitle = styled(motion.div)`
  position: absolute;
  height: 100%;
  background-color: white;
`;

export const SText = styled(motion.p)`
  ${tText}
  margin-bottom: 8px;
`;

export const SLink = styled(motion.a)`
border-bottom: 1px solid white;
`;

// local z-index

export const SBackgroundColor = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.s.colorMain};
  z-index: -1;
`;
