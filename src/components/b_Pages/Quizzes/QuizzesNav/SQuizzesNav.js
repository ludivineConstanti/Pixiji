import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { buttonWidth, strokeWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled(motion.nav)`
height: ${buttonWidth};
display: flex;
position: fixed;
bottom: 0;
left: 50%;
transform: translate(-50%, 0);
align-items: center;
`;

export const SNavSquare = styled(motion(NavLink))`
  border: ${strokeWidth} solid #FFF;
  height: 24px;
  width: 24px;
  background-color: ${(props) => props.s.color};
  margin: 16px;
`;
