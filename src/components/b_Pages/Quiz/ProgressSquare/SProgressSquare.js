import styled from 'styled-components';
import { motion } from 'framer-motion';

// initial css before comes in transition
export default styled(motion.div)`
  height: ${(props) => (props.s.isDone ? '4px' : '2px')};
  width: ${(props) => (props.s.isDone ? '4px' : '2px')};
  background-color: ${(props) => (props.s.isDone ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)')};
`;
