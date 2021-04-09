import styled from 'styled-components';

// initial css before comes in transition
export default styled.div`
height: 100vh;
width: 100vw;
background-color: ${((props) => props.colorIllu)};
position: fixed;
top: 0;
left: 0;
`;
