import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
`

const ShowsList = () => (
  <div>
    Start by looking up you favorite TV show!
    <SpinnerContainer>
      <Spin size='large' />
    </SpinnerContainer>
  </div>
)

export default ShowsList
