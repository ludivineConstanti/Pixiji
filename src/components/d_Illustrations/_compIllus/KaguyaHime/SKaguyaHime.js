import styled from 'styled-components';
import {
  squareUnitM, buttonWidth, illuDimensions, breakPointD, illuCustomPos,
} from 'src/styles/g';

export const bambooColors = ['#057B73', '#04625C', '#034A45'];

const dMoon = illuDimensions(4, 4);
const pMoon = illuCustomPos({ right: { pos: [12] } });

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
const pHime = illuCustomPos({ right: { pos: [22] }, bottom: { pos: [0], sC: 'buttonWidth' } });

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
