import styled from 'styled-components';

import { strokeWidth } from 'src/styles/g';

// initial css before comes in transition
export default styled.button`
border-top: ${strokeWidth} solid white;
background-color: ${(props) => props.colorMainL1}
`;
