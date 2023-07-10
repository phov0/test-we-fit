import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  padding: 10px 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #FFF;

`

export const Image = styled.img`
  width: 147px;
  height: 188px;
  margin-bottom: 7px;
`

export const Title = styled.div`
  color: #333;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
`
export const Price = styled.div`
  color: #2F2E41;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 8px;
`


export const Button = styled.button<{ $backgroundColor?: string; }>`
  display: flex;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  background:${props => props.$backgroundColor || "#009EDD"};
  color: #FFFFFF;
`
export const IconArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
`
