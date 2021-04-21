import styled from 'styled-components';
import { motion } from 'framer-motion';

import { buttonWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100vw - ${buttonWidth});
`;
