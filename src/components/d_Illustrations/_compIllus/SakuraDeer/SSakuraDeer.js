import styled from 'styled-components';
import {
  illuTouchingGround,
  squareUnit,
  buttonWidth,
} from 'src/styles/g';

const trunk = `
background-color: #510909;
position: absolute;
bottom: 0;
width: calc(${squareUnit} * 2);
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

// I don't put those z-index in the global variable files
// because they're only useful locally (so that the mainSquare hovers are not blocked)

export const STree1 = styled.div`
position: absolute;
bottom: calc(${squareUnit} * 9);
left: calc(${squareUnit} * 6);
z-index: 2;
`;

export const STrunk2 = styled.div`
${trunk}
right: calc(${squareUnit} * 8);
height: calc(${squareUnit} * 25);
`;

export const STree2P1 = styled.div`
position: absolute;
bottom: calc(${squareUnit} * 14);
right: 0;
z-index: 3;
`;

export const STree2P2 = styled.div`
position: absolute;
bottom: calc(${squareUnit} * 6);
right: 0;
z-index: 2;
:hover {
  z-index: 4;
}
`;

export const SDeer = styled.div`
position: absolute;
bottom: 0;
right: calc(${squareUnit} * 12);
z-index: 1;
`;
