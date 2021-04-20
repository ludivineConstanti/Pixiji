import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  illuTouchingGround, illuMarginL, squareUnit, buttonWidth,
} from 'src/styles/g';

// initial css before comes in transition
export const SSun = styled.div`
position: fixed;
left: ${illuMarginL};
top: ${buttonWidth};
`;

export const SCloudLeft = styled(motion.div)`
position: fixed;
left: calc(${illuMarginL} + ${squareUnit} * 2);
top: calc(${buttonWidth} + ${squareUnit} * 5);
`;

export const SCloudRight = styled(motion.div)`
position: fixed;
right: calc(${squareUnit} * 3);
top: calc(${buttonWidth} / 2);
`;

export const SRockLeft = styled.div`
${illuTouchingGround}
left: ${illuMarginL};
`;

export const SBaby = styled.div`
${illuTouchingGround}
left: calc(${illuMarginL} + ${squareUnit} * 6);
`;

export const SAdult = styled.div`
${illuTouchingGround}
right: calc(${squareUnit} * 7);
`;

export const SRockRight = styled(motion.div)`
${illuTouchingGround}
right: 0;
`;
