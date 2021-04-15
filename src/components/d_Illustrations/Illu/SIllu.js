import styled from 'styled-components';
import { motion } from 'framer-motion';

import { zIIlluBackground } from 'src/styles/g';

// initial css before comes in transition
export default styled(motion.div)`
height: 100vh;
background-color: ${((props) => props.s.colorIllu)};
position: fixed;
top: 0;
right: 0;
z-index: ${zIIlluBackground};
`;
