import styled from 'styled-components';
import { motion } from 'framer-motion';

import { zIAppBackground } from 'src/styles/g';

const background = `
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${zIAppBackground};
`;

export const SPColorMain = styled.div`
  width: 100vw;
  ${background}
  background-color: ${(props) => props.s.color};
`;

export const SColorMain = styled(motion.div)`
  ${background}
  background-color: ${(props) => props.s.color};
`;
