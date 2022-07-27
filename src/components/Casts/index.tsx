import CharacterCard from 'components/CharacterCard'
import React from 'react'
import { Cast } from 'store/types/interfaces'
import { CardContainer, Container } from './style'

export default function Casts({ casts }: {casts: Cast[]}) {
  return (
    <Container>
      {casts.map(cast => {
        return (
          <CardContainer key={cast.id}>
            <CharacterCard cast={cast}/>
          </CardContainer>
      )})}
    </Container>
  )
}
