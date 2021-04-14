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
  justify-content: ${(props) => (props.pointsToward === 'right' ? 'flex-end' : 'flex-start')};
`;

export const SStroke = styled.div`
  width: ${arrowWidth};
  height: ${strokeWidth};
  background-color: ${(props) => props.colorMain};
`;

const borderOnR = `${strokeWidth} ${strokeWidth} 0 0`;
const borderOnL = `0 0 ${strokeWidth} ${strokeWidth}`;

export const SEnd = styled.div`
  border-width: ${(props) => (props.pointsToward === 'right' ? borderOnR : borderOnL)};
  border-color: ${(props) => props.colorMain};
  position: absolute;
  height: ${arrowEndS}px;
  width: ${arrowEndS}px;
  transform: rotate(45deg);
  border-style: solid;
`;
