import styled from 'styled-components';
import { motion } from 'framer-motion';

import { strokeWidth } from 'src/styles/g';

export const vLinkIcon = {
  initial: { scale: 0, x: 150 },
  animate: { scale: 1, x: 0 },
  exit: { scale: 0, x: -150 },
  whileHover: { scale: 1.25 },
};

// initial css before comes in
export default styled(motion.a)`
  border: ${strokeWidth} solid white;
  height: span 1;
  width: span 1;
  display: block;
  grid-column-start: ${(props) => props.s.columnStart};
`;
