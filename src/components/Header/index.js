import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

const { Search } = Input

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  box-shadow: 0px 1px 10px -6px gray;
  padding: 0 32px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const Header = () => (
  <Container>
    <Search
      placeholder='Search for a TV Show'
      allowClear
      onSearch={() => null}
      style={{ width: 400 }}
      enterButton
    />
  </Container>
)

export default Header
