import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { buttonKanjiSize, strokeWidth } from 'src/styles/g';
import { tButtonInText } from 'src/styles/typo';

// initial css before comes in
export default styled(NavLink)`
  border: ${strokeWidth} solid white;
  display: flex;
  margin-top: 24px;
  align-items: center;
  justify-content: flex-end;
  height: ${buttonKanjiSize};
  width: 100%;
  padding: 24px;
`;

export const SText = styled.p`
${tButtonInText}
margin-right: 12px;
`;
