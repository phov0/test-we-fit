import styled from "styled-components";
import {Link} from "react-router-dom";
export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: red;
 
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 2rem;
`