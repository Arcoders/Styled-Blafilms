import React from 'react'
import Card from '../Card'
import { Result } from '../../style'

const ITEMS_PERPAGE = 10
const FIRST_PAGE = 1

function Films({ films, setCurrentPage, totalResults, currentPage }) {
  const isLastPage =
    currentPage >=
    Math.ceil(parseInt(totalResults, ITEMS_PERPAGE) / ITEMS_PERPAGE)

  const handleNext = () => {
    if (!isLastPage) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > FIRST_PAGE) setCurrentPage(currentPage - 1)
  }

  return (
    <Result.Container>
      <Result.Section>
        <Result.Prev
          onClick={handlePrev}
          disable={currentPage === FIRST_PAGE}
        />
      </Result.Section>
      <Result.List>
        {films.map(card => (
          <Card key={card.imdbID} {...card} />
        ))}
      </Result.List>
      <Result.Section>
        <Result.Next onClick={handleNext} disable={isLastPage} />
      </Result.Section>
    </Result.Container>
  )
}

export default Films
