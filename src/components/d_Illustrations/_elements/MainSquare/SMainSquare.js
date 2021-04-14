import styled from 'styled-components';

import { zIMainSquare } from 'src/styles/g';
import { tMSquareInfos, tMSquareInfosBottom } from 'src/styles/typo';

const textHidden = `
  display: none;
  opacity: 0;
`;

// initial css before comes in
export default styled.div`
  z-index: ${zIMainSquare};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SInfos = styled.span`
  ${tMSquareInfos}
  ${textHidden}
`;

export const SInfosKana = styled.span`
  margin-right: 8px;
`;

export const SInfosBottom = styled.span`
  ${tMSquareInfosBottom}
  ${textHidden}
  text-align: center;
  position: absolute;
  bottom: 8px;
  width: 100%;
`;
