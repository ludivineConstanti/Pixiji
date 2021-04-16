import styled from 'styled-components';
import { motion } from 'framer-motion';

import { strokeWidth } from 'src/styles/g';
import { tMenuSetting, tMenuSettingOnOff } from 'src/styles/typo';

// initial css before comes in transition
export default styled(motion.button)`
  ${tMenuSetting}
  border: ${strokeWidth} solid white;
  background-color: ${((props) => props.s.colorMainL1)};
  border-top: 0 solid white;
  color: white;
  width: 100%;
  text-align: left;
`;

export const SText = styled.span`
  margin-right: 16px;
`;

export const SOnOff = styled.div`
  ${tMenuSettingOnOff}
  height: 32px;
  width: 32px;
  background-color: ${(props) => (props.active ? 'white' : 'rgba(255, 255, 255, 0.25)')};
  color: ${(props) => (props.colorMain)};
`;
