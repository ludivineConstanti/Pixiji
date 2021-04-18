import styled from 'styled-components';
import { motion } from 'framer-motion';

import { contentL } from 'src/styles/g';
import { tTitle, tText } from 'src/styles/typo';

// initial css before comes in transition
export default styled(motion.main)`
${contentL}
`;

export const STitle = styled(motion.h1)`
  ${tTitle}
  margin-bottom: 24px;
  position: relative;
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
