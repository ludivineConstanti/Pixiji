import styled from 'styled-components';

import {
  zIquestion, contentL, buttonKanjiSize, buttonKanjiSizeGap,
} from 'src/styles/g';

// initial css before comes in transition
export default styled.main`
z-index: ${zIquestion};
${contentL}
.question__options {
  display: grid;
  grid-template-columns: repeat(3, ${buttonKanjiSize});
  gap: ${buttonKanjiSizeGap};
}
`;
