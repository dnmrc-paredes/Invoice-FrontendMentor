import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px;
  background-color: rgb(30, 33, 57);
  display: flex;
  width: 100%;
  max-width: 700px;
  height: 100%;
  min-height: 80px;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  padding: 10px 0;

  @media screen and (min-width: 300px) and (max-width: 600px) {
  }
`

export const Upper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  margin-left: 10px;

  p {
    margin: 0 10px;
    &.invoice-id {
      font-weight: 700;
      color: #7e88c3;
      span {
        color: white;
      }
    }

    &.due-date, &.name {
      font-weight: 300;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 600px) {
    align-items: baseline;
    flex-direction: column;
    justify-content: center;

    p.invoice-id {
      margin-bottom: 10px;
      font-weight: 700;
      color: #7e88c3;
      span {
        color: white;
      }
    }
  }
`

export const Lower = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-right: 20px;
  }
`