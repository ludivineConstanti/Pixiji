import styled from 'styled-components';
import { squareUnit } from 'src/styles/g';

export const SDragon = styled.div`
position: fixed;
right: ${squareUnit};
bottom: calc(${squareUnit} * 3);
`;

export const SCloud = styled.div`
position: fixed;
right: 0;
bottom: 0;
`;
