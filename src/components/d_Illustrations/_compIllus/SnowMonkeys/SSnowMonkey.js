import styled from 'styled-components';
import {
  illuTouchingGround, illuMarginL, breakPointD, squareUnitM, illuDimensions, illuPosition,
} from 'src/styles/g';

const dMonkeyLeft = illuDimensions(10, 12);

export const SMonkeyLeft = styled.div`
${dMonkeyLeft}
${illuTouchingGround}
left: calc(${squareUnitM} * 5);
  ${breakPointD} {
    left: ${illuMarginL};
  }
`;

const dMonkeyRight = illuDimensions(9, 11);
const pMonkeyRight = illuPosition([0, 4, 6, 0], true);

export const SMonkeyRight = styled.div`
${dMonkeyRight}
${pMonkeyRight.right}
${pMonkeyRight.bottom}
`;

const dRocks = illuDimensions(7, 23);

export const SRocks = styled.div`
${illuTouchingGround};
${dRocks}
right: 0;
`;
