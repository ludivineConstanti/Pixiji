import styled from 'styled-components';
import { squareUnit, buttonWidth, illuMarginL } from 'src/styles/g';

// initial css before comes in transition
const sPole = `
position: fixed;
background-color: #120B42;
width: ${squareUnit};
`;

export const SPole0 = styled.div`
${sPole}
left: ${illuMarginL};
top: calc(50% - ${squareUnit} * 2.5);
height: 60vh;
`;

export const SPole1 = styled.div`
${sPole}
right: calc(${buttonWidth} + (${squareUnit} * 22));
top: calc(${buttonWidth} + ${squareUnit});
height: calc(100vh - ${buttonWidth});
`;

export const SFish0 = styled.div`
position: fixed;
right: ${buttonWidth};
top: ${buttonWidth};
`;

export const SFish1 = styled.div`
position: fixed;
left: ${illuMarginL};
top: 50%;
transform: translate(0%, -50%);
`;

export const SFish2 = styled.div`
position: fixed;
right: ${buttonWidth};
bottom: ${buttonWidth};
`;
