import styled from 'styled-components';
import { squareUnit, buttonWidth } from 'src/styles/g';

export const SCloudTop = styled.div`
position: fixed;
right: ${squareUnit};
top: ${buttonWidth};
`;

const cDragonB = 7;
const cDragonR = 7;

export const SDragon = styled.div`
position: fixed;
right: calc(${squareUnit} * (${cDragonR} + 6));
bottom: calc(${squareUnit} * (${cDragonB} + 4));
`;

export const SCloudDragon = styled.div`
position: fixed;
right: calc(${squareUnit} * ${cDragonR});
bottom: calc(${squareUnit} * ${cDragonB});
`;

export const SCloudBL = styled.div`
position: fixed;
left: calc(${buttonWidth} * 2);
bottom: 0;
`;

export const SCloudBR = styled.div`
position: fixed;
right: 0;
bottom: 0;
`;
