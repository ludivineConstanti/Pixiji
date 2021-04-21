import styled from 'styled-components';

import {
  zIquestion, contentL, buttonKanjiSize, buttonKanjiSizeGap, breakPointT, breakPointD, buttonWidth,
} from 'src/styles/g';
import { tText } from 'src/styles/typo';

// initial css before comes in transition
export default styled.main`
z-index: ${zIquestion};
${contentL}
`;

export const SText = styled.h2`
  ${tText}
  margin-bottom: 24px;
`;

const optionsWidth = `100vw - ${buttonWidth}`;

export const SOptions = styled.div`
  display: grid;
  width: calc(${optionsWidth});
  height: calc((((${optionsWidth} - (${buttonKanjiSizeGap} * 3) ) / 4) * 3) + ${buttonKanjiSizeGap} * 2);
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  gap: ${buttonKanjiSizeGap};
  ${breakPointT} {
    width: auto;
    height: auto;
    grid-template-columns: repeat(4, ${buttonKanjiSize});
  }
  ${breakPointD} {
    grid-template-columns: repeat(3, ${buttonKanjiSize});
  }
`;
