import styled from 'styled-components';
import {
  illuDimensions, illuPosition,
} from 'src/styles/g';

const dTree0 = illuDimensions(12, 10);
const pTree0 = illuPosition([0, 40, 2, 0], true);

export const STree0 = styled.div`
  ${dTree0}
  ${pTree0.bottom}
  ${pTree0.right}
`;

// I don't put those z-index in the global variable files
// because they're only useful locally (so that the mainSquare hovers are not blocked)

const dTree1 = illuDimensions(14, 12);
const pTree1 = illuPosition([0, 32, 9, 0], true);

export const STree1 = styled.div`
  ${dTree1}
  ${pTree1.bottom}
  ${pTree1.right}
  z-index: 2;
`;

const dTree2P1 = illuDimensions(16, 20);
const pTree2P1 = illuPosition([0, 0, 14, 0], true);

export const STree2P1 = styled.div`
  ${dTree2P1}
  ${pTree2P1.bottom}
  right: 0;
  z-index: 3;
`;

const dTree2P2 = illuDimensions(8, 12);
const pTree2P2 = illuPosition([0, 0, 6, 0], true);

export const STree2P2 = styled.div`
  ${dTree2P2}
  ${pTree2P2.bottom}
  right: 0;
  z-index: 2;
  :hover {
    z-index: 4;
  }
`;

const dDeer = illuDimensions(24, 22);
const pDeer = illuPosition([0, 12, 0, 0], true);

export const SDeer = styled.div`
  ${dDeer}
  ${pDeer.bottom}
  ${pDeer.right}
  z-index: 1;
`;
