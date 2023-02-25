import React from 'react'
import { Card } from '../../style'
import placeholderImg from '../../placeholder.png'
import { POSTER_NO_DISPONIBLE } from '../../constant'

function Film({ Poster: poster, Year: year, Title: title, Type: type }) {
  const posterImage = poster === POSTER_NO_DISPONIBLE ? placeholderImg : poster
  return (
    <Card.Container>
      <Card.Cover src={posterImage} alt={title} />
      <Card.data>
        <Card.Title>{title}</Card.Title>
        <Card.Meta>{type | year}</Card.Meta>
      </Card.data>
    </Card.Container>
  )
}

export default Film
