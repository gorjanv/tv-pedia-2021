import styled from 'styled-components'
import { Spin } from 'antd'

const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 48px;
`

const Spinner = () => (
  <SpinnerContainer>
    <Spin size='large' />
  </SpinnerContainer>
)

export default Spinner
