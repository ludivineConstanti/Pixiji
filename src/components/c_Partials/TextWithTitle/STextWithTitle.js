import styled from 'styled-components';

import { contentL } from 'src/styles/g';
import { tTitle, tText } from 'src/styles/typo';

// initial css before comes in transition
export default styled.main`
${contentL}
`;

export const STitle = styled.h1`
  ${tTitle}
  margin-bottom: 24px;
`;

export const SText = styled.p`
  ${tText}
  margin-bottom: 8px;
`;
