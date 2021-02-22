import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Input } from 'antd'

import { fetchShowsByName, setSearchTerm } from '../../reducers/shows'

const { Search } = Input

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  font-size: 32px;
  box-shadow: 0px 1px 10px -6px gray;
  padding: 0 32px;
  display: grid;
  place-items: center;
`

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onSearch = searchTerm => {
    // 1 - if on a differenet page than home then re-route to home
    // 2 - search for shows by the searchTerm
    // 3 - save the searchTerm
    if (!searchTerm) return

    history.push('/')
    dispatch(setSearchTerm(searchTerm))
    dispatch(fetchShowsByName(searchTerm))
  }

  return (
    <Container>
      <Search
        placeholder='Search for a TV Show'
        onSearch={term => onSearch(term)}
        style={{ width: 400 }}
      />
    </Container>
  )
}

export default Header
