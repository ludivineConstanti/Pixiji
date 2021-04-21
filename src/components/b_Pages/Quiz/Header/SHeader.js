import styled from 'styled-components';

import { buttonWidth, breakPointT, breakPointD } from 'src/styles/g';
import { tQuizHeader } from 'src/styles/typo';

// initial css before comes in transition
export default styled.header`
  ${tQuizHeader}
  width: calc(100vw - ${buttonWidth});
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  ${breakPointT} {
    height: ${buttonWidth};
  }
  ${breakPointD} {
    width: 100vw;
  }
`;
