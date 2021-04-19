import styled from 'styled-components';
import { motion } from 'framer-motion';

import { strokeWidth, buttonKanjiSize } from 'src/styles/g';
import { tQuizButtonKanji } from 'src/styles/typo';

// initial css before comes in transition
export default styled(motion.button)`
  ${tQuizButtonKanji}
  width: ${buttonKanjiSize};
  height: ${buttonKanjiSize};
  border: ${(props) => (props.s.isWrong
    ? `${strokeWidth} solid rgba(255, 255, 255, 0.25)`
    : props.s.cheating
      ? `calc(${strokeWidth} * 1.5) solid rgba(255, 255, 255, 1)`
      : `${strokeWidth} solid rgba(255, 255, 255, 1)`)
};
  color: ${(props) => (props.s.isWrong ? 'rgba(255, 255, 255, 0.5)' : 'white')};
  font-size: 18px;
  background-color: ${(props) => props.s.colorMain}
`;
