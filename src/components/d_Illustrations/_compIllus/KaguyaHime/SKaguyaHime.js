import styled from 'styled-components';
import {
  illuTouchingGround, squareUnit, buttonWidth,
} from 'src/styles/g';
import { green, greenL1 } from 'src/components/d_Illustrations/_data/kaguyaHime';

export const greenD1 = '#04645E';

const bambooColors = [greenL1, green, greenD1];

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
  { side: 'right', margin: 60, color: bambooColors[2] },
  { side: 'right', margin: 56, color: bambooColors[0] },
  { side: 'right', margin: 50, color: bambooColors[1] },
  { side: 'right', margin: 42, color: bambooColors[0] },
  { side: 'right', margin: 24, color: bambooColors[0] },
  { side: 'right', margin: 17, color: bambooColors[0] },
  { side: 'right', margin: 9, color: bambooColors[1] },
  { side: 'right', margin: 5, color: bambooColors[0] },
  { side: 'right', margin: 0, color: bambooColors[2] },
];
