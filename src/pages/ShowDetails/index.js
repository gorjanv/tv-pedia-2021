import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import { Message } from '../../components/styles'
import Spinner from '../../components/Spinner'
import EpisodesOverview from '../../components/EpisodesOverview'

const Container = styled.div`
  padding: 16px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: 600;
`

const Summary = styled.div`
  margin-left: 16px;
  line-height: 1.25;
  max-width: 800px;
  @media (max-width: 768px) {
    margin-top: 16px;
    margin-left: 0;
  }
`

const InfoContainer = styled.div`
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

const BackButton = styled.a`
  font-size: 12px;

  &: before {
    content: '< ';
  }
`

const ShowDetails = () => {
  const history = useHistory()
  const { showId } = useParams()
  const [showInfo, setShowInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigateToSearch = () => history.push('/')

  useEffect(() => {
    const fetchShowById = async id => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`, {
          params: { embed: 'episodes' }
        })
        setShowInfo(response.data)
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        setError(true)
      }
    }

    fetchShowById(showId)
  }, [showId])

  if (isLoading) {
    return <Spinner />
  }

  if (error || !showInfo) {
    return <Message>Something went wrong..</Message>
  }

  const episodesBySeason = showInfo._embedded.episodes.reduce((acc, val) => {
    if (acc[val.season - 1]) {
      acc[val.season - 1].push(val)
    } else {
      acc[val.season - 1] = [val]
    }
    return acc
  }, [])

  return (
    <Container>
      <BackButton onClick={navigateToSearch}>Back to search</BackButton>
      <Content>
        <Title>{showInfo.name}</Title>
        <InfoContainer>
          <img
            alt=''
            src={
              showInfo.image?.medium ||
              `${process.env.PUBLIC_URL}/images/img_not_found_placeholder.png`
            }
          />
          <Summary dangerouslySetInnerHTML={{ __html: showInfo.summary }} />
        </InfoContainer>
        <EpisodesOverview episodes={episodesBySeason} />
      </Content>
    </Container>
  )
}

export default ShowDetails
