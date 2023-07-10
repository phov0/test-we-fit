import styled from "styled-components";
import {Link} from "react-router-dom";
export const Nav = styled.nav`
  width: 100%;
  max-width: 960px;
  margin: auto;
  display: flex;
  padding: 18px 10px;
  justify-content: space-between;
  background-color: #2F2E41;
  top: 0;
  z-index: 10;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: fixed;


`

export const CartBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap:3px ;
  margin-right: 8px;
  color: #FFF;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  div{
    text-align: right;
    display: none;

    @media(min-width: 600px){
      display: block;
    }
  }

  p{
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