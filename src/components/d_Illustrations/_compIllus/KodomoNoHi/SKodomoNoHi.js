import styled from 'styled-components';

import { squareUnit, illuDimensions } from 'src/styles/g';

const dFish = illuDimensions(7, 23);

export const SFish0 = styled.div`
  ${dFish}
  right: calc(${squareUnit} * 10);
  bottom: calc(${squareUnit} * 27);
`;

export const SFish1 = styled.div`
  ${dFish}
  right: calc(${squareUnit} * 27);
  bottom: calc(${squareUnit} * 15);
`;

export const SFish2 = styled.div`
  ${dFish}
  right: calc(${squareUnit} * 10);
  bottom: calc(${squareUnit} * 5);
`;
