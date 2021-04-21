import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  squareUnitM, squareUnitT, squareUnit, breakPointT, breakPointD,
} from 'src/styles/g';

export const SStar = styled(motion.div)`
  position: absolute;
  background-color: ${(props) => props.s.color};
  height: calc(${squareUnitM} * ${(props) => props.s.size});
  width: calc(${squareUnitM} * ${(props) => props.s.size});
  top: ${(props) => props.s.top}vh;
  left: ${(props) => props.s.left}vw;
  ${breakPointT} {
    height: calc(${squareUnitT} * ${(props) => props.s.size});
    width: calc(${squareUnitT} * ${(props) => props.s.size});
  }
  ${breakPointD} {
    height: calc(${squareUnit} * ${(props) => props.s.size});
    width: calc(${squareUnit} * ${(props) => props.s.size});
  }
`;

export const SStarContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;
