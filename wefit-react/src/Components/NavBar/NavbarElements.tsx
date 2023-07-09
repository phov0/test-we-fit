import styled from "styled-components";
import {Link} from "react-router-dom";
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 18px 10px;
  justify-content: space-between;
  background-color: #2F2E41;
  left: 0;
  top: 0;
  z-index: 10;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
 
`

export const CartBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p{
    margin-right: 8px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #999999;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 20px;
`