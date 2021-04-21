import styled from 'styled-components';
import { motion } from 'framer-motion';

import { zIMainSquare } from 'src/styles/g';
import { tMSquareInfos, tMSquareKanji, tMSquareInfosBottom } from 'src/styles/typo';

export default styled(motion.div)`
  background-color: ${(props) => props.s.color};
  grid-column-start: ${(props) => props.s.columnStart};
  grid-row-start: ${(props) => props.s.rowStart};
  grid-column-end: span ${(props) => props.s.size};
  grid-row-end: span ${(props) => props.s.size};
  z-index: ${zIMainSquare};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const textHidden = `
  display: none;
  opacity: 0;
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
