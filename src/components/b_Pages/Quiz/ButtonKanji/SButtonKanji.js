import styled from 'styled-components';

import { strokeWidth, buttonKanjiSize } from 'src/styles/g';
import { tQuizButtonKanji } from 'src/styles/typo';

// initial css before comes in transition
export default styled.button`
  ${tQuizButtonKanji}
  width: ${buttonKanjiSize};
  height: ${buttonKanjiSize};
  border: ${strokeWidth} solid white;
  color: white;
  font-size: 18px;
`;
