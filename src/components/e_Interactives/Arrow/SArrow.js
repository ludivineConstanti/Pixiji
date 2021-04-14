import styled from 'styled-components';

import { strokeWidth } from 'src/styles/g';

const arrowWidth = '24px';
const arrowEndS = '12';

// initial css before comes in
export const SArrow = styled.div`
  height: ${Math.hypot(arrowEndS, arrowEndS)}px;
  width: ${arrowWidth};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SStroke = styled.div`
  width: ${arrowWidth};
  height: ${strokeWidth};
  background-color: ${(props) => props.colorMain};
`;

export const SEnd = styled.div`
  border-top-width: ${strokeWidth};
  border-right-width: ${strokeWidth};
  border-color: ${(props) => props.colorMain};
  position: absolute;
  height: ${arrowEndS}px;
  width: ${arrowEndS}px;
  transform: rotate(45deg);
  border-style: solid;
`;
