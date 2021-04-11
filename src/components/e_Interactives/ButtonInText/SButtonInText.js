import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { buttonKanjiSize, strokeWidth, zIBigButton } from 'src/styles/g';

// initial css before comes in
export default styled(NavLink)`
  border: ${strokeWidth} solid white;
  display: flex;
  margin-top: 24px;
  align-items: center;
  height: ${buttonKanjiSize};
  width: 100%;
`;
