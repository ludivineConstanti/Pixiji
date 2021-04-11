import styled from 'styled-components';
import { squareUnit, buttonWidth, illuMarginL } from 'src/styles/g';

// initial css before comes in transition
export const SPlanet = styled.div`
position: fixed;
top: ${buttonWidth};
left: ${illuMarginL};
`;

export const SRabbitOnMoon = styled.div`
position: fixed;
bottom: 0;
right: calc(${squareUnit} * 2);
`;
