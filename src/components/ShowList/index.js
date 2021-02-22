import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'antd'

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
`

const ShowCard = styled(Card)`
  margin: 8px;
  width: 160px;
`

const ShowName = styled.div`
  font-weight: bold;
  font-size: 12px;
`
const ShowList = ({ shows }) => {
  const history = useHistory()
  return (
    <Container>
      {shows.map(({ show }) => (
        <ShowCard
          onClick={() => history.push(`/show/${show.id}`)}
          hoverable
          cover={
            <img
              style={{ height: 200 }}
              alt='example'
              src={
                show.image?.medium ||
                `${process.env.PUBLIC_URL}/images/img_not_found_placeholder.png`
              }
            />
          }
        >
          <ShowName>{show.name}</ShowName>
        </ShowCard>
      ))}
    </Container>
  )
}

export default ShowList
