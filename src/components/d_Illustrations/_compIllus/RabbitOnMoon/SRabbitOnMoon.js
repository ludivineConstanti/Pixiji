import styled from 'styled-components';
import {
  squareUnitT, squareUnitM, buttonWidth, illuMarginL, breakPointT,
  breakPointD, illuDimensions, illuCustomPos,
} from 'src/styles/g';

const dPlanet = illuDimensions(10, 10);

export const SPlanet = styled.div`
${dPlanet}
position: fixed;
left: calc(${buttonWidth} / 2);
bottom: calc(${squareUnitM} * 32);
${breakPointT} {
  bottom: calc(${squareUnitT} * 22);
}
${breakPointD} {
  left: ${illuMarginL};
  top: ${buttonWidth};
}
`;

const dRabbit = illuDimensions(15, 11);
const pRabbit = illuCustomPos({ right: { pos: [7], sC: 'buttonWidth' }, bottom: { pos: [14] } });

export const SRabbit = styled.div`
  ${dRabbit}
  ${pRabbit.bottom}
  ${pRabbit.right}
`;

const dMoon = illuDimensions(14, 28);
const pMoon = illuCustomPos({ right: { pos: [0], sC: 'buttonWidth' } });

export const SMoon = styled.div`
  ${dMoon}
  ${pMoon.right}
  bottom: 0;
`;
