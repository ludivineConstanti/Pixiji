import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// initial css before comes in transition
export default styled(NavLink)`
color: ${(props) => props.colorMain}
`;
