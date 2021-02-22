import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import get from 'lodash/get'

import {
  Message,
  Container,
  BackButton,
  Content,
  Title,
  InfoContainer,
  Summary
} from '../../components/styles'
import Spinner from '../../components/Spinner'

const ShowDetails = () => {
  const history = useHistory()
  const { episodeId } = useParams()
  const [episodeInfo, setEpisodeInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchEpisodeById = async id => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/episodes/${id}`,
          {
            params: { embed: 'show' }
          }
        )
        setEpisodeInfo(response.data)
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        setError(true)
      }
    }

    fetchEpisodeById(episodeId)
  }, [episodeId])

  if (isLoading) {
    return <Spinner />
  }

  if (error || !episodeInfo) {
    return <Message>Something went wrong..</Message>
  }
  const showName = get(episodeInfo, '_embedded.show.name')
  const showId = get(episodeInfo, '_embedded.show.id')

  const navigateToShow = () => history.push(`/show/${showId}`)

  return (
    <Container>
      <BackButton onClick={navigateToShow}>
        Back to {showName || '-'}
      </BackButton>
      <Content>
        <Title>{episodeInfo.name}</Title>
        <InfoContainer>
          <img
            alt=''
            src={
              episodeInfo.image?.medium ||
              `${process.env.PUBLIC_URL}/images/img_not_found_placeholder.png`
            }
          />
          <Summary
            dangerouslySetInnerHTML={{
              __html: episodeInfo.summary || 'No summary available'
            }}
          />
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default ShowDetails
