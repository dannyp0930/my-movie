import React, { useEffect, useState } from 'react';
import { Crew } from 'store/types/interfaces';
import { Container } from './style';

export default function Crews({ crews }: { crews:  Crew[] }) {
  const [ directors, setDirectors ] = useState<Crew[]>([]);
  const [ screenplays, setScreenplays ] = useState<Crew[]>([]);
  const [ producers, setProducers ] = useState<Crew[]>([]);
  const [ musics, setMusics ] = useState<Crew[]>([]);

  useEffect(() => {
    setDirectors(crews.filter((c: Crew) => c.job === "Director"));
    setScreenplays(crews.filter((c: Crew) => c.job === "Screenplay"));
    setProducers(crews.filter((c: Crew) => c.job === "Producer"));
    setMusics(crews.filter((c: Crew) => c.job === "Original Music Composer"));
  }, [crews]);

  return (
    <Container>
      <div>
        <h4>감독</h4>
        {directors.map(director => <p key={director.id}>{director.name}</p>)}
      </div>
      <div>
        <h4>각본</h4>
        {screenplays.map(screenplay => <p key={screenplay.id}>{screenplay.name}</p>)}
      </div>
      <div>
        <h4>제작</h4>
        {producers.map(producer => <p key={producer.id}>{producer.name}</p>)}
      </div>
      <div>
        <h4>음악</h4>
        {musics.map(music => <p key={music.id}>{music.name}</p>)}
      </div>
  </Container>
  );
};
