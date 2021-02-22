import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'

import ShowList from '../../components/ShowList'
import { Message } from '../../components/styles'
import Spinner from '../../components/Spinner'

const Home = () => {
  const { searchTerm, results, loading, error, errorMessage } = useSelector(
    state => state.searchResults
  )

  if (loading) {
    return <Spinner />
  }

  if (results.length === 0) {
    if (searchTerm !== '') {
      return (
        <Message>
          Couldn't find any TV shows with that name. Please refine your search.
        </Message>
      )
    }
    return <Message>Start by looking up you favorite TV show!</Message>
  }

  return <ShowList shows={results} />
}

export default Home