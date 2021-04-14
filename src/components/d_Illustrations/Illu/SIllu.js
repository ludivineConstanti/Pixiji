import styled from 'styled-components';
import {
  zIIlluBackground,
} from 'src/styles/g';

// initial css before comes in transition
export default styled.div`
height: 100vh;
width: 100vw;
background-color: ${((props) => props.s.colorIllu)};
position: fixed;
top: 0;
left: 0;
z-index: ${zIIlluBackground};
`;
