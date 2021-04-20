import styled from 'styled-components';
import {
  squareUnitM, buttonWidth, illuDimensions, illuPosition, breakPointD,
} from 'src/styles/g';
import { green, greenL1 } from 'src/components/d_Illustrations/_data/kaguyaHime';

export const greenD1 = '#04645E';

const bambooColors = [greenL1, green, greenD1];

const dMoon = illuDimensions(4, 4);
const pMoon = illuPosition([0, 12, 0, 0]);

export const SMoon = styled.div`
  ${dMoon}
  ${pMoon.right}
  bottom: calc((${squareUnitM} * 30) + ${buttonWidth});
  ${breakPointD} {
    bottom: auto;
    top: ${buttonWidth};
  }
`;

const dHime = illuDimensions(18, 24);
const pHime = illuPosition([0, 22, 0, 0], true);

export const SHime = styled.div`
  ${dHime}
  ${pHime.right}
  ${pHime.bottom}
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
