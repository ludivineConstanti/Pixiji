import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { tMenuLink } from 'src/styles/typo';

// initial css before comes in transition
export default styled(NavLink)`
  ${tMenuLink}
  color: ${(props) => props.s.colorMain};
  margin: 6px;
`;
