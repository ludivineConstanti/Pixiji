import styled from 'styled-components';

import { strokeWidth } from 'src/styles/g';

const arrowWidth = '24px';

// initial css before comes in
export const SArrow = styled.div`
  position: relative;
  height: 15px;
  margin-top: 8px;
  width: 100%;
`;

export const SStroke = styled.div`
  position: absolute;
  width: ${arrowWidth};
  margin: auto;
  left:  calc(50% - ${arrowWidth} / 2);
  height: ${strokeWidth};
  top: calc(50% - ${strokeWidth} - 1px);
  background-color: ${(props) => props.colorMain};
`;

export const SEnd = styled.div`
  border-top-width: ${strokeWidth};
  border-right-width: ${strokeWidth};
  border-color: ${(props) => props.colorMain};
  position: absolute;
  height: 12px;
  width: 12px;
  left: calc( 50% );
  transform: rotate(45deg);
  border-style: solid;
`;
