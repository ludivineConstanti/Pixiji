import styled from 'styled-components';
import {
  squareUnitM, squareUnitT, buttonWidth, illuDimensions, breakPointT, breakPointD, illuCustomPos,
} from 'src/styles/g';

const dCloudTop = illuDimensions(4, 12);
const pCloudTop = illuCustomPos({ right: { pos: [1] } });

export const SCloudTop = styled.div`
  ${dCloudTop}
  ${pCloudTop.right}
  bottom: calc(${squareUnitM} * 40);
  ${breakPointT} {
    bottom: calc(${squareUnitT} * 40);
  }
  ${breakPointD} {
    bottom: auto;
    top: ${buttonWidth};
  }
`;

const oDragonR = 6;
const oDragonB = 4;

const dCRightM = 7;
const dCBottomM = 14;
const dCBottomT = 10;
const dCBottomD = 7;

const dDragon = illuDimensions(18, 27);
const pDragon = illuCustomPos(
  {
    right: { pos: [oDragonR + dCRightM] },
    bottom: { pos: [oDragonB + dCBottomM, oDragonB + dCBottomT, oDragonB + dCBottomD] },
  },
);

export const SDragon = styled.div`
  ${dDragon}
  ${pDragon.right}
  ${pDragon.bottom}
`;

const dCloudDragon = illuDimensions(4, 30);
const pCloudDragon = illuCustomPos(
  { right: { pos: [dCRightM] }, bottom: { pos: [dCBottomM, dCBottomT, dCBottomD] } },
);

export const SCloudDragon = styled.div`
  ${dCloudDragon}
  ${pCloudDragon.right}
  ${pCloudDragon.bottom}
`;

const dCloudBL = illuDimensions(4, 16);
const pCloudBL = illuCustomPos({ left: { pos: [2, 10], sC: 'buttonWidth' } });

export const SCloudBL = styled.div`
  ${dCloudBL}
  ${pCloudBL.left}
  bottom: 0;
`;

const dCloudBR = illuDimensions(4, 15);

export const SCloudBR = styled.div`
  ${dCloudBR}
  right: 0;
  bottom: 0;
`;
