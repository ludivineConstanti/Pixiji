import styled from 'styled-components';

import { buttonWidth, zIBigButton } from 'src/styles/g';

// initial css before comes in
export default styled.button`
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

// new css after comes in
export const tIn = (tl, ref, color) => {
  tl.to(ref, {
    ease: 'out', left: 0, color,
  }).play();
  return tl;
};
