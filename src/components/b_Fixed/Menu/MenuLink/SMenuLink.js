import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { tMenuLink } from 'src/styles/typo';

// initial css before comes in transition
export default styled(motion(NavLink))`
  ${tMenuLink}
  color: ${(props) => props.s.colorMainL1};
  margin: 6px;
  width: 100%;
`;
