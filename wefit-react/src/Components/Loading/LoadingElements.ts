import styled, {keyframes} from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    display: inline-block;
    animation: ${spin} 2s infinite linear;
  }

`


