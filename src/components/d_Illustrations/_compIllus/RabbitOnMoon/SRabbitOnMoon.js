import styled from 'styled-components';
import {
  squareUnit, squareUnitM, buttonWidth, illuMarginL, breakPointD, illuDimensions,
} from 'src/styles/g';

const dPlanet = illuDimensions(10, 10);

export const SPlanet = styled.div`
${dPlanet}
position: fixed;
left: calc(${buttonWidth} / 2);
bottom: calc(${squareUnitM} * 14);
  ${breakPointD} {
    left: ${illuMarginL};
    top: ${buttonWidth};
  }
`;

const marginMoonM = 0;
const marginMoon = 4;

const dRabbit = illuDimensions(15, 11);

export const SRabbit = styled.div`
  ${dRabbit}
  bottom: calc(${squareUnitM} * 14);
  right: calc((${squareUnitM} * (${marginMoonM} + 7 )) + ${buttonWidth});
  ${breakPointD} {
    bottom: calc(${squareUnit} * 14);
    right: calc(${squareUnit} * (${marginMoon} + 7 ));
  }
`;

const dMoon = illuDimensions(14, 28);

export const SMoon = styled.div`
  ${dMoon}
  bottom: 0;
  right: calc((${squareUnitM} * ${marginMoonM}) + ${buttonWidth});
  ${breakPointD} {
    right: calc(${squareUnit} * ${marginMoon});
  }
`;
