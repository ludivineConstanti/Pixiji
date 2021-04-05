import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { zImenu, contentMenuWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled(NavLink)`
z-index: ${zImenu};
.menu__content {
  left: calc(${contentMenuWidth} * - 1);
  width: ${contentMenuWidth};
}
`;
