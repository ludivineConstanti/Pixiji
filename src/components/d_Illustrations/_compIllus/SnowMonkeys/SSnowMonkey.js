import styled from 'styled-components';
import {
  illuTouchingGround,
  illuMarginL,
  buttonWidth,
} from 'src/styles/g';

export const SMonkeyLeft = styled.div`
${illuTouchingGround};
left: ${illuMarginL};
`;

export const SMonkeyOnRocks = styled.div`
${illuTouchingGround};
bottom: ${buttonWidth};
right: 0;
`;
