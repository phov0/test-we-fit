import styled from "styled-components";
import {Link} from "react-router-dom";

export const SearchArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background: #FFF;
  margin-bottom: 16px;
  
  
`

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #C0C0C0;
  
  &:focus-visible{
	outline: none;
  }
`

export const CartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 2rem;
`