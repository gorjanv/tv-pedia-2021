import styled from 'styled-components'

export const Message = styled.div`
  display: grid;
  place-items: center;
  margin-top: 32px;
  color: #888;
`
export const Container = styled.div`
  padding: 16px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
`

export const Summary = styled.div`
  margin-left: 16px;
  line-height: 1.25;
  max-width: 800px;
  @media (max-width: 768px) {
    margin-top: 16px;
    margin-left: 0;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;

  > img {
    max-height: 295px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 16px;
    align-items: center;
  }
`

export const BackButton = styled.a`
  font-size: 12px;

  &: before {
    content: '< ';
  }
`
