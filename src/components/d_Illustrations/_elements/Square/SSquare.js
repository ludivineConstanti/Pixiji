import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
  background-color: ${(props) => props.s.color};
  grid-column-start: ${(props) => props.s.columnStart};
  grid-row-start: ${(props) => props.s.rowStart};
  grid-column-end: span ${(props) => props.s.size};
  grid-row-end: span ${(props) => props.s.size};
`;
