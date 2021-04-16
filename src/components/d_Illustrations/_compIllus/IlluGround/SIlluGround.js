import styled from 'styled-components';
import { buttonWidth } from 'src/styles/g';
import { motion } from 'framer-motion';

export default styled(motion.div)`
position: fixed;
right: 0;
bottom: 0;
height: ${buttonWidth};
background-color: ${(props) => props.s.color};
`;
