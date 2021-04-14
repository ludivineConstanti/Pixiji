import styled from 'styled-components';
import {
  groundDeco, illuTouchingGround, squareUnit, buttonWidth,
} from 'src/styles/g';
import { green, greenL1 } from 'src/components/d_Illustrations/_data/kaguyaHime';

const bambooColors = [greenL1, green, '#04645E'];

// initial css before comes in transition
export const SGround = styled.div`
${groundDeco}
background-color: ${bambooColors[2]};
`;

export const SIllu = styled.div`
${illuTouchingGround};
height: calc(100vh - ${buttonWidth});
width: 100vw;
right: 0;
`;

export const SMoon = styled.div`
position: absolute;
right: calc(${squareUnit} * 12);
top: ${buttonWidth};
`;

export const SHime = styled.div`
position: absolute;
right: calc(${squareUnit} * 22);
bottom: -1px;
`;

export const bSettings = [
  { side: 'left', margin: 0, color: bambooColors[2] },
  { side: 'left', margin: buttonWidth, color: bambooColors[2] },
  { side: 'right', margin: `calc(${squareUnit} * 60)`, color: bambooColors[2] },
  { side: 'right', margin: `calc(${squareUnit} * 56)`, color: bambooColors[0] },
  { side: 'right', margin: `calc(${squareUnit} * 50)`, color: bambooColors[1] },
  { side: 'right', margin: `calc(${squareUnit} * 42)`, color: bambooColors[0] },
  { side: 'right', margin: `calc(${squareUnit} * 24)`, color: bambooColors[0] },
  { side: 'right', margin: `calc(${squareUnit} * 17)`, color: bambooColors[0] },
  { side: 'right', margin: `calc(${squareUnit} * 9)`, color: bambooColors[1] },
  { side: 'right', margin: `calc(${squareUnit} * 5)`, color: bambooColors[0] },
  { side: 'right', margin: 0, color: bambooColors[2] },
];

export const SBamboo = styled.div`
  position: absolute;
  height: 100vh;
  width: calc(${squareUnit} * 2);
  bottom: 0;
  ${(props) => props.s.side}: ${(props) => props.s.margin};
  background-color: ${(props) => props.s.color};
`;
