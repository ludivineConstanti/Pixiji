import styled from 'styled-components';
import {
  groundDeco,
  illuTouchingGround,
  squareUnit,
  buttonWidth,
  zIElementInFront,
} from 'src/styles/g';

const trunk = `
background-color: #510909;
position: absolute;
bottom: 0;
width: calc(${squareUnit} * 2);
`;

// initial css before comes in transition
export const SGround = styled.div`
${groundDeco}
background-color: #9B3471;
`;

export const SIllu = styled.div`
${illuTouchingGround};
height: calc(100vh - ${buttonWidth});
right: 0;
width: calc(${squareUnit} * 50);
`;

export const STrunk0 = styled.div`
${trunk}
left: calc(${squareUnit} * 2);
height: calc(${squareUnit} * 10);
`;

export const STree0 = styled.div`
position: absolute;
bottom: calc(${squareUnit} * 2);
left: 0;
`;

export const STrunk1 = styled.div`
${trunk}
left: calc(${squareUnit} * 10);
height: calc(${squareUnit} * 20);
`;

export const STree1 = styled.div`
position: absolute;
bottom: calc(${squareUnit} * 9);
left: calc(${squareUnit} * 6);
`;

export const STrunk2 = styled.div`
${trunk}
left: calc(${squareUnit} * 24);
height: calc(${squareUnit} * 25);
`;

export const STree2 = styled.div`
position: absolute;
bottom: calc(${squareUnit} * 20);
right: calc(${squareUnit} * 16);
`;

export const STrunk3 = styled.div`
${trunk}
right: calc(${squareUnit} * 8);
height: calc(${squareUnit} * 25);
`;

export const STree3 = styled.div`
position: absolute;
bottom: calc(${squareUnit} * 7);
right: 0;
`;

export const SDeer = styled.div`
position: absolute;
bottom: 0;
right: calc(${squareUnit} * 12);
z-index: ${zIElementInFront};
`;
