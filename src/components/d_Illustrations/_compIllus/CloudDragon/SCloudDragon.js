import styled from 'styled-components';
import {
  squareUnitM, buttonWidth, illuDimensions, illuPosition, breakPointD,
} from 'src/styles/g';

const dCloudTop = illuDimensions(4, 12);
const pCloudTop = illuPosition([0, 1, 0, 0]);

export const SCloudTop = styled.div`
  ${dCloudTop}
  ${pCloudTop.right}
  bottom: calc(${squareUnitM} * 30);
  ${breakPointD} {
    bottom: auto;
    top: ${buttonWidth};
  }
`;

const cDragonB = 7;
const cDragonR = 7;

const dDragon = illuDimensions(18, 27);
const pDragon = illuPosition([0, cDragonR + 6, cDragonB + 4, 0]);

export const SDragon = styled.div`
  ${dDragon}
  ${pDragon.right}
  ${pDragon.bottom}
`;

const dCloudDragon = illuDimensions(4, 30);
const pCloudDragon = illuPosition([0, cDragonR, cDragonB, 0]);

export const SCloudDragon = styled.div`
  ${dCloudDragon}
  ${pCloudDragon.right}
  ${pCloudDragon.bottom}
`;

const dCloudBL = illuDimensions(4, 16);

export const SCloudBL = styled.div`
  ${dCloudBL}
  left: calc(${buttonWidth} * 2);
  bottom: 0;
`;

const dCloudBR = illuDimensions(4, 15);

export const SCloudBR = styled.div`
  ${dCloudBR}
  right: 0;
  bottom: 0;
`;
