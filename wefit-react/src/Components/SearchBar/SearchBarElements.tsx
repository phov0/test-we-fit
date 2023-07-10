import styled from "styled-components";

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
  color: #2F2E41;
  font-family: inherit;

  &:focus-visible{
    outline: none;
  }

  &::placeholder{
    color: #C0C0C0;
  }
`

export const TextArea = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0px 24px 0px
  }
`

export const Text = styled.div<{ $bold?: boolean; }>`
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: ${props => props.$bold ? 700 : 400};
  line-height: normal;

`

export const FindIconArea = styled.div<{$notEmpty:string}>`
  path{
    fill: ${props => props.$notEmpty !== "" ? "#2F2E41": "#CCCCCC"}; !important
  }
`
