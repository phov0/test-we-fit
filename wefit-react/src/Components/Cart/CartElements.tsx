import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: flex-start;
  flex: 1 0 0;
  align-items: center;
  border-radius: 4px;
  background: #FFF;

  @media(min-width: 600px){
    padding: 24px;
    height: 100%;
  }
`

export const Header = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 21px;
  @media(min-width: 600px){
    display: grid;
    grid-template-areas: 'a . b c .';
    grid-template-columns: 120px 2fr 1fr 1fr 2fr;
  }
`

export const HeaderText = styled.div<{ $gridArea: string; $textAlign?: string}>`
  grid-area: ${props => props.$gridArea };
  text-align:  ${props => props.$textAlign || "left" };
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const ItensArea = styled.div`
  width: 100%;
  flex:1;
  display: flex;
  flex-direction: column;
  gap:8px;
  @media(min-width: 600px){
    gap:16px;
  }
`
export const Hr = styled.div`
  width:100%;
  margin: 21px 0px 21px 0px;
  border-top: 1px solid #999999 ;
`
export const PriceArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  color: #999;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media(min-width: 600px){
    justify-content: flex-start;
    align-items: baseline;
    margin-bottom: 0px;
  }

  div{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex:1;
    max-width: 55%;

    @media(min-width: 600px){
      flex:0;
    }
  }
  span{
    width: fit-content;
    color: #2F2E41;
    text-align: right;
    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right:16px;

    @media(min-width: 600px){
      margin-left: 16px;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media(min-width: 600px){
    flex-direction: row;
    align-items: center;
  }
`
export const Button = styled.button`
  display: flex;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  align-self: stretch;
  border-radius: 4px;
  background: #009EDD;
  color: #FFFFFF;
  font-family: inherit;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  min-width: 235px;


`