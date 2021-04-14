import styled from 'styled-components';

import { buttonWidth, zIBigButton } from 'src/styles/g';
import { tButtonBigComment, tButtonBigText } from 'src/styles/typo';

// initial css before comes in
export default styled.button`
${tButtonBigText}
position: fixed;
bottom: 0;
line-height: 20px;
background-color: white;
height: ${buttonWidth};
width: ${buttonWidth};
${((props) => props.side)}: calc(${buttonWidth} * -1);
z-index: ${zIBigButton};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
