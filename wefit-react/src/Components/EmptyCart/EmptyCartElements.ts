import styled from "styled-components";

export const Card = styled.div`
  position:relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #FFF;
  padding: 64px 64px 32px 64px;

`

export const Text = styled.div`
  color: #2F2E41;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  br{
    @media (min-width: 500px) {
      display: none;
    }
  }
`

export const ImageArea = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`

export const Image = styled.img`


`

export const Hr = styled.div`
  position: relative;
  width:calc(100% + 128px);
  left: 0;
  top: -36px;
  border-top: 1px solid #3F3D56;
  max-width: 447px;


`

export const Button = styled.button`
  width: 180px;
  height: 40px;
  flex-shrink: 0;
  border: none;
  border-radius: 4px;
  background: #009EDD;
  color: #FFFFFF;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
`