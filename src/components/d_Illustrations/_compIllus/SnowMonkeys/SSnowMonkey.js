import styled from 'styled-components';
import {
  illuMarginL, breakPointD, squareUnitM, illuDimensions, illuCustomPos,
} from 'src/styles/g';

const touchingGround = illuCustomPos({ bottom: { pos: [0], sC: 'buttonWidth' } });

const dMonkeyLeft = illuDimensions(10, 12);

export const SMonkeyLeft = styled.div`
${dMonkeyLeft}
${touchingGround.bottom}
left: calc(${squareUnitM} * 5);
  ${breakPointD} {
    left: ${illuMarginL};
  }
`;

const dMonkeyRight = illuDimensions(9, 11);
const pMonkeyRight = illuCustomPos({ right: { pos: [4] }, bottom: { pos: [6], sC: 'buttonWidth' } });

export const SMonkeyRight = styled.div`
${dMonkeyRight}
${pMonkeyRight.right}
${pMonkeyRight.bottom}
`;

const dRocks = illuDimensions(7, 23);

export const SRocks = styled.div`
${touchingGround.bottom};
${dRocks}
right: 0;
`;
