import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  squareUnit, squareUnitM, buttonWidth, breakPointD,
} from 'src/styles/g';

export default styled(motion.div)`
  position: fixed;
  background-color: ${(props) => props.s.color};
  ${(props) => props.s.side}: calc(${squareUnitM} * ${(props) => props.s.margin});
  bottom: ${(props) => (props.s.touchGround ? buttonWidth : 0)};
  height: ${(props) => (props.s.height === 100 ? '100vh' : `calc(${squareUnitM} *  ${props.s.height})`)};
  width: ${(props) => (`calc(${squareUnitM} * ${props.s.width})`)};
  ${breakPointD} {
    ${(props) => props.s.side}: calc(${squareUnit} * ${(props) => props.s.margin});
    width: ${(props) => (`calc(${squareUnit} * ${props.s.width})`)};
    height: ${(props) => (props.s.height === 100 ? '100vh' : `calc(${squareUnit} *  ${props.s.height})`)};
  }
`;
