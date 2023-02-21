import React from 'react'
import placeholderImg from '../../placeholder.png'
import { Card } from '../../style'

function Film({ Poster, Year, Title, Type }) {
  return (
    <Card.Container>
      <Card.Cover
        src={Poster === 'N/A' ? placeholderImg : Poster}
        alt={`${Title} cover`}
      />
      <Card.data>
        <Card.Title>{Title}</Card.Title>
        <Card.Meta>{`${Type} | ${Year}`}</Card.Meta>
      </Card.data>
    </Card.Container>
  )
}

export default Film
