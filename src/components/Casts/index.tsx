import CharacterCard from 'components/CharacterCard'
import React from 'react'
import { Cast } from 'store/types/interfaces'
import { Card, CastList, Container } from './style'

export default function Casts({ casts }: {casts: Cast[]}) {
  return (
    <Container>
      <CastList>
        {casts.map(cast => {
          return (
            <Card key={cast.id}>
              <CharacterCard cast={cast}/>
            </Card>
        )})}
      </CastList>
    </Container>
  )
}
