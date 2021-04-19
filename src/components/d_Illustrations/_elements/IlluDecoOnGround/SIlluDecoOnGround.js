import styled from 'styled-components';
import { motion } from 'framer-motion';

import { squareUnit, buttonWidth } from 'src/styles/g';

export default styled(motion.div)`
position: fixed;
background-color: ${(props) => props.s.color};
${(props) => props.s.side}: calc(${squareUnit} * ${(props) => props.s.margin});
bottom: ${(props) => (props.s.touchGround ? buttonWidth : 0)};
height: ${(props) => (props.s.height === 100 ? '100vh' : `calc(${squareUnit} *  ${props.s.height})`)};
`;
