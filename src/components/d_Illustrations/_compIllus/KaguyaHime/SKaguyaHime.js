import styled from 'styled-components';
import {
  squareUnitM, squareUnitT, buttonWidth, illuDimensions, breakPointD, illuCustomPos,
  breakPointT, contentLMarginL, contentLMarginLM, contentLMarginLT, contentLWidthR,
} from 'src/styles/g';
import { motion } from 'framer-motion';
import { colorKaguyaHime } from 'src/components/d_Illustrations/_data/kaguyaHime';

export const bambooColors = ['#057B73', '#04625C', '#034A45'];

const dMoon = illuDimensions(4, 4);
const pMoon = illuCustomPos({ right: { pos: [12] } });

export const SMoon = styled.div`
  ${dMoon}
  ${pMoon.right}
  bottom: calc((${squareUnitM} * 30) + ${buttonWidth});
  ${breakPointT} {
    bottom: calc((${squareUnitT} * 30) + ${buttonWidth});
  }
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

export const SBackgroundColor = styled(motion.div)`
  ${contentLWidthR}
  top: 0;
  background-color: ${colorKaguyaHime};
  left: ${contentLMarginLM};
  position: fixed;
  height: calc(${contentLMarginLM} * 1.5);
  ${breakPointT} {
    height: calc(${contentLMarginLT} * 1.5);
    left: ${contentLMarginLT};
  }
  ${breakPointD} {
    height: 50%;
    margin: 0;
    left: ${contentLMarginL};
  }
`;
