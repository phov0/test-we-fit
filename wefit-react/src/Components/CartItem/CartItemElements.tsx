import styled from "styled-components";

export const ItemArea = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-areas: 'a b b e'
                       'a c d d';
  grid-template-columns: auto 2fr 1fr 1fr;

  @media(min-width: 600px){
    grid-template-areas: 'a b c d e';
    grid-template-columns: 120px 2fr 1fr 1fr 2fr;
  }

`

export const Image = styled.img`
  width: 64px;
  height: 82px;
  margin-right: 16px;
  grid-area: a;

  @media(min-width: 600px){
    width: 89px;
    height: 114px;
  }
`


export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  grid-area: b;

  @media(min-width: 600px){
    flex-direction: column;
    justify-content: flex-start;
  }

  &:nth-child(1){
    margin-top: 5px;
  }
`
export const Title = styled.div`
  color: #2F2E41;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex:3;

  @media(min-width: 600px){
    margin-bottom: 8px;
  }
`

export const Price = styled.div`
  color: #2F2E41;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const TrashIconContainer = styled.div`
  grid-area: e;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  @media(min-width: 600px){

    align-items: center;
  }
`

export const SubTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap:3px;

  grid-area: d;

`

export const SubTotal = styled.div`
  color: #999;
  font-family: inherit;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media(min-width: 600px){
    display: none;
  }
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap:11px;

  grid-area: c;
`

export const Amount = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  height: 26px;
  padding: 0px 12px;

  color: #2F2E41;
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`