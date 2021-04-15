import styled from 'styled-components';
import { zIAppBackground } from 'src/styles/g';

// initial css before comes in transition
export default styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
right: 0;
z-index: ${zIAppBackground};
background-color: ${(props) => props.s.pColorMain}
`;
