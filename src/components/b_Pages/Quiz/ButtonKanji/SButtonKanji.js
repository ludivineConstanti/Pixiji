import styled from 'styled-components';

import {
  strokeWidth, buttonKanjiSize,
} from 'src/styles/g';

// initial css before comes in transition
export default styled.button`
width: ${buttonKanjiSize};
height: ${buttonKanjiSize};
border: ${strokeWidth} solid white;
`;
