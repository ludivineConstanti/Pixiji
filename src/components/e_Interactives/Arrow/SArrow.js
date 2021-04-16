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
  justify-content: ${(props) => (props.s.pointsToward === 'right' ? 'flex-end' : 'flex-start')};
`;

export const SStroke = styled.div`
  width: 100%;
  height: ${strokeWidth};
  background-color: ${(props) => props.s.colorMain};
`;

const borderOnR = `${strokeWidth} ${strokeWidth} 0 0`;
const borderOnL = `0 0 ${strokeWidth} ${strokeWidth}`;

export const SEnd = styled.div`
  border-width: ${(props) => (props.s.pointsToward === 'right' ? borderOnR : borderOnL)};
  border-color: ${(props) => props.s.colorMain};
  position: absolute;
  height: ${arrowEndS}px;
  width: ${arrowEndS}px;
  transform: rotate(45deg);
  border-style: solid;
`;
