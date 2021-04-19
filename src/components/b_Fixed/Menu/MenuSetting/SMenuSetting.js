import styled from 'styled-components';
import { motion } from 'framer-motion';

import { strokeWidth } from 'src/styles/g';
import { tMenuSetting, tMenuSettingOnOff } from 'src/styles/typo';

// initial css before comes in transition
export default styled(motion.button)`
  ${tMenuSetting}
  border: ${strokeWidth} solid white;
  border-top: 0 solid white;
  color: white;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const SText = styled.div`
  margin-right: 16px;
  margin-left: 24px;
`;

export const SOnOff = styled.div`
  ${tMenuSettingOnOff}
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.s.active ? 'white' : 'rgba(255, 255, 255, 0.25)')};
  color: ${(props) => (props.s.colorMain)};
`;
