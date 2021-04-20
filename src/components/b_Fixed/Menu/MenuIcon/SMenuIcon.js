import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  buttonWidth, buttonMenuIconSize, strokeWidth, breakPointD,
} from 'src/styles/g';

// initial css before comes in transition
export default styled(motion.button)`
  height: ${buttonWidth};
  width: ${buttonWidth};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  ${breakPointD} {
    left: 0;
  }
`;

export const SIconContainer = styled.div`
  height: ${buttonMenuIconSize};
  width: ${buttonMenuIconSize};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SIconStroke = styled(motion.div)`
  height: ${strokeWidth};
  background-color: ${(props) => props.s.colorMain};
`;
