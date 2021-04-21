import styled from 'styled-components';
import {
  illuDimensions, zIIlluInFront, illuCustomPos,
} from 'src/styles/g';

const dTree0 = illuDimensions(12, 10);
const pTree0 = illuCustomPos({ right: { pos: [40] }, bottom: { pos: [2], sC: 'buttonWidth' } });

export const STree0 = styled.div`
  ${dTree0}
  ${pTree0.bottom}
  ${pTree0.right}
`;

const dTree1 = illuDimensions(14, 12);
const pTree1 = illuCustomPos({ right: { pos: [32] }, bottom: { pos: [9], sC: 'buttonWidth' } });

export const STree1 = styled.div`
  ${dTree1}
  ${pTree1.bottom}
  ${pTree1.right}
  z-index: ${zIIlluInFront};
`;

const dTree2P1 = illuDimensions(16, 20);
const pTree2P1 = illuCustomPos({ bottom: { pos: [14], sC: 'buttonWidth' } });

export const STree2P1 = styled.div`
  ${dTree2P1}
  ${pTree2P1.bottom}
  right: 0;
`;

const dTree2P2 = illuDimensions(8, 12);
const pTree2P2 = illuCustomPos({ bottom: { pos: [6], sC: 'buttonWidth' } });

export const STree2P2 = styled.div`
  ${dTree2P2}
  ${pTree2P2.bottom}
  right: 0;
`;

const dDeer = illuDimensions(24, 22);
const pDeer = illuCustomPos({ right: { pos: [12] }, bottom: { pos: [0], sC: 'buttonWidth' } });

export const SDeer = styled.div`
  ${dDeer}
  ${pDeer.bottom}
  ${pDeer.right}
`;
