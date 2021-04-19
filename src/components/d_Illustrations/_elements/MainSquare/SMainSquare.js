import styled from 'styled-components';
import { motion } from 'framer-motion';

import { zIMainSquare } from 'src/styles/g';
import { tMSquareInfos, tMSquareKanji, tMSquareInfosBottom } from 'src/styles/typo';

const textHidden = `
  display: none;
  opacity: 0;
`;

// initial css before comes in
export default styled(motion.div)`
  z-index: ${zIMainSquare};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SInfos = styled(motion.span)`
  ${tMSquareInfos}
  ${textHidden}
  text-align: center;
`;

export const SKanji = styled(motion.span)`
  ${tMSquareKanji}
`;

export const SInfosBottom = styled(motion.span)`
  ${tMSquareInfosBottom}
  ${textHidden}
  text-align: center;
  position: absolute;
  width: 100%;
`;
