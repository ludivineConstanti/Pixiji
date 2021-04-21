import styled from 'styled-components';

import { illuDimensions, illuCustomPos } from 'src/styles/g';

const dFish = illuDimensions(7, 23);
const pFish0 = illuCustomPos({ right: { pos: [5, 10] }, bottom: { pos: [27] } });

export const SFish0 = styled.div`
  ${dFish}
  ${pFish0.right}
  ${pFish0.bottom}
`;

const pFish1 = illuCustomPos({ right: { pos: [20, 27] }, bottom: { pos: [15] } });

export const SFish1 = styled.div`
  ${dFish}
  ${pFish1.right}
  ${pFish1.bottom}
`;

const pFish2 = illuCustomPos({ bottom: { pos: [5] } });

export const SFish2 = styled.div`
  ${dFish}
  ${pFish0.right}
  ${pFish2.bottom}
`;
