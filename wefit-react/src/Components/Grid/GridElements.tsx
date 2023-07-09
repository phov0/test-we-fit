import styled from "styled-components";
import {Link} from "react-router-dom";
export const GridArea = styled.div`
  margin:auto;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 
`
