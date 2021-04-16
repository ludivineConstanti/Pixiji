import styled from 'styled-components';
import { motion } from 'framer-motion';

import { zIAppBackground } from 'src/styles/g';

// initial css before comes in transition
export default styled(motion.div)`
height: 100vh;
width: ${(props) => props.s.width};
position: fixed;
top: 0;
right: 0;
z-index: ${zIAppBackground};
background-color: ${(props) => props.s.color};
`;
