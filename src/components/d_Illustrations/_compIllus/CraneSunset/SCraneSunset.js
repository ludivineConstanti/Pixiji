import styled from 'styled-components';
import {
  groundDeco, illuTouchingGround, illuMarginL,
} from 'src/styles/g';

// initial css before comes in transition
export const SRockLeft = styled.div`
${illuTouchingGround}
left: ${illuMarginL};
`;

export const SBaby = styled.div`
${illuTouchingGround}
`;

export const SAdult = styled.div`
${illuTouchingGround}
`;

export const SRockRight = styled.div`
${illuTouchingGround}
right: 0;
`;

export const SWater = styled.div`
${groundDeco}
background-color: #398084;
`;
