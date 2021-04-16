import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { buttonKanjiSize } from 'src/styles/g';
import { tButtonInText } from 'src/styles/typo';

// initial css before comes in
export default styled(motion(NavLink))`
  display: flex;
  margin-top: 24px;
  align-items: center;
  justify-content: flex-end;
  height: ${buttonKanjiSize};
  width: 100%;
`;

export const SText = styled(motion.p)`
${tButtonInText}
margin-right: 12px;
`;
