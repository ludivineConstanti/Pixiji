import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  illuTouchingGround, illuMarginL, squareUnit, squareUnitM,
  buttonWidth, illuDimensions, illuPosition, breakPointD,
} from 'src/styles/g';

const dSun = illuDimensions(5, 5);

// initial css before comes in transition
export const SSun = styled.div`
  ${dSun}
  bottom: calc(${buttonWidth} + (${squareUnitM} * 10));
  left: calc(${squareUnitM} * 20);
  ${breakPointD} {
    left: ${illuMarginL};
    top: ${buttonWidth};
  }
`;

const dCloudLeft = illuDimensions(3, 16);

export const SCloudLeft = styled(motion.div)`
  ${dCloudLeft}
  left: calc(${squareUnitM} * 2);
  bottom: calc(${squareUnitM} * 25);
  ${breakPointD} {
    bottom: auto;
    left: calc(${illuMarginL} + ${squareUnit} * 2);
    top: calc(${buttonWidth} + ${squareUnit} * 5);
  }
`;

const dCloudRight = illuDimensions(3, 14);

export const SCloudRight = styled(motion.div)`
  ${dCloudRight}
  left: calc(${squareUnitM} * 17);
  bottom: calc(${buttonWidth} + ${squareUnitM});
  ${breakPointD} {
    left: auto;
    bottom: auto;
    right: calc(${squareUnit} * 3);
    top: calc(${buttonWidth} / 2);
  }
`;

const dRockLeft = illuDimensions(3, 6);

export const SRockLeft = styled.div`
  ${dRockLeft}
  ${illuTouchingGround}
  ${breakPointD} {
    left: ${illuMarginL};
  }
`;

const dBaby = illuDimensions(16, 9);

export const SBaby = styled.div`
  ${dBaby}
  ${illuTouchingGround}
  left: calc(${squareUnitM} * 6);
  ${breakPointD} {
    left: calc(${illuMarginL} + ${squareUnit} * 6);
  }
`;

const dAdult = illuDimensions(24, 16);
const pAdult = illuPosition([0, 7, 0, 0], true);

export const SAdult = styled.div`
  ${dAdult}
  ${pAdult.right}
  ${pAdult.bottom}
`;

const dRockRight = illuDimensions(3, 5);

export const SRockRight = styled(motion.div)`
${dRockRight}
${illuTouchingGround}
right: 0;
`;
