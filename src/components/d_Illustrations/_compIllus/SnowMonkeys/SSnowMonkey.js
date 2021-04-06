import styled from 'styled-components';
import {
  buttonWidth, contentLWidth, contentLMarginL, zIIlluWithGrowingSquare,
} from 'src/styles/g';

// initial css before comes in transition
export const SWater = styled.div`
position: fixed;
left: 0;
bottom: 0;
background-color: #80ACAC;
height: ${buttonWidth};
width: 100vw;
`;

export const SMonkeyLeft = styled.div`
position: fixed;
left: calc(${contentLWidth} + ${contentLMarginL} * 2);
bottom: ${buttonWidth};
z-index: ${zIIlluWithGrowingSquare};
`;

export const SMonkeyOnRocks = styled.div`
position: fixed;
right: 0;
bottom: ${buttonWidth};
z-index: ${zIIlluWithGrowingSquare};
`;
