import styled from 'styled-components';

import {
  zIquestion, contentL, buttonKanjiSize, buttonKanjiSizeGap,
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

export const SOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, ${buttonKanjiSize});
  gap: ${buttonKanjiSizeGap};
`;
