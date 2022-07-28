import React from 'react';
import CharacterCard from 'components/CharacterCard';
import { Cast } from 'store/types/interfaces';
import { Card, CastList, Container } from './style';

export default function Casts({ casts }: {casts: Cast[]}) {
  return (
    <Container>
      <h2>주요 출연진</h2>
      <CastList>
        {casts.map(cast => {
          return (
            <Card key={cast.id}>
              <CharacterCard cast={cast}/>
            </Card>
        )})}
      </CastList>
    </Container>
  );
};
