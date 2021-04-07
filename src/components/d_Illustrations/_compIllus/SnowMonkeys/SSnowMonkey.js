import styled from 'styled-components';
import {
  groundDeco,
  illuTouchingGround,
  illuMarginL,
  buttonWidth,
} from 'src/styles/g';

// initial css before comes in transition
export const SWater = styled.div`
${groundDeco}
background-color: #80ACAC;
`;

export const SMonkeyLeft = styled.div`
${illuTouchingGround};
left: ${illuMarginL};
`;

export const SMonkeyOnRocks = styled.div`
${illuTouchingGround};
bottom: ${buttonWidth};
`;
