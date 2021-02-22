import React, { useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Pagination, Select } from 'antd'

const { Option } = Select

const DEFAULT_PAGE_SIZE = 15

const highilghtItem = `
  background-color: #777;
  color: white;
  cursor: pointer;
`

const Label = styled.div`
  ${({ selected }) =>
    selected &&
    css`
      ${highilghtItem}
    `}

  font-weight: 500;

  &:hover {
    ${highilghtItem}
  }
`

const SeasonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  width: 200px;
  overflow: scroll;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 8px;
  }
`
const Container = styled.div`
  margin: 8px;
  }
`

const EpisodesColumn = styled.div`
  margin-left: 16px;
  height: 400px;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 16px;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const EpisodesOverview = ({ episodes }) => {
  const history = useHistory()
  const match = useRouteMatch()
  const [selectedSeason, setSelectedSeason] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)

  const paginateFrom = (selectedPage - 1) * DEFAULT_PAGE_SIZE
  const paginateTo = (selectedPage - 1) * DEFAULT_PAGE_SIZE + DEFAULT_PAGE_SIZE
  const paginatedEpisodes = episodes[selectedSeason]?.slice(
    paginateFrom,
    paginateTo
  )

  return (
    episodes.length > 0 && (
      <Container>
        <Title>Episodes</Title>
        <ColumnsContainer>
          <SeasonsColumn>
            <Select
              defaultValue={0}
              onChange={value => {
                setSelectedSeason(value)
                setSelectedPage(1)
              }}
            >
              {episodes.map((e, index) => (
                <Option key={`season_${index}`} value={index}>
                  Season {index + 1}
                </Option>
              ))}
            </Select>
          </SeasonsColumn>
          <div>
            <EpisodesColumn>
              {paginatedEpisodes.map(ep => (
                <Label
                  key={ep.id}
                  onClick={() => history.push(`${match.url}/episode/${ep.id}`)}
                >
                  {ep.name}
                </Label>
              ))}
            </EpisodesColumn>

            {episodes[selectedSeason].length > DEFAULT_PAGE_SIZE && (
              <Pagination
                defaultCurrent={1}
                current={selectedPage}
                defaultPageSize={DEFAULT_PAGE_SIZE}
                onChange={setSelectedPage}
                total={episodes[selectedSeason].length}
                showSizeChanger={false}
                size='small'
              />
            )}
          </div>
        </ColumnsContainer>
      </Container>
    )
  )
}

export default EpisodesOverview
