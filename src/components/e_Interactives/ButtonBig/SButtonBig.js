import styled from 'styled-components';
import { motion } from 'framer-motion';

import { buttonWidth, zIBigButton } from 'src/styles/g';
import { tButtonBigComment, tButtonBigText } from 'src/styles/typo';

// initial css before comes in
export default styled(motion.div)`
${tButtonBigText}
position: fixed;
bottom: 0;
line-height: 20px;
background-color: ${(props) => props.s.colorButton};
height: ${buttonWidth};
width: ${buttonWidth};
${((props) => props.s.side)}: calc(${buttonWidth} * -1);
z-index: ${zIBigButton};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

// otherwise, the button is somehow floating near the menu...
export const SButton = styled.button`
  position: absolute;
  bottom: 0;
  ${((props) => props.s.side)}: 0;
`;

export const SComment = styled.p`
  ${tButtonBigComment}
`;

export const SText = styled.p`
  margin-bottom: 4px;
`;

// new css after comes in
export const tIn = (tl, ref, color, side) => {
  if (side === 'left') {
    tl.to(ref, {
      ease: 'out', left: 0, color,
    }).play();
  }
  else {
    tl.to(ref, {
      ease: 'out', right: 0, color,
    }).play();
  }
  return tl;
};
