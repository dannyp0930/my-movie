import React, { useEffect, useState } from 'react';
import { Cast } from 'store/types/interfaces';
import { IMG_URL } from 'utils/API';
import { Card, Character, Name, Poster } from './style';
import DefaultNone from "../../assets/images/default_none.png"
import DefaultMan from "../../assets/images/default_man.png"
import DefaultWoman from "../../assets/images/default_woman.png"

export default function CharacterCard({ cast }: { cast: Cast }) {
  const [ poster, setPoster ] = useState<string>(DefaultNone);

  useEffect(() => {
    if (cast.profile_path) {
      setPoster(IMG_URL + cast.profile_path)
    } else if (cast.gender === 1) {
      setPoster(DefaultWoman)
    } else if (cast.gender === 2) {
      setPoster(DefaultMan)
    }
  }, [cast]);

  return (
    <Card>
      <Poster
        src={poster}
        alt="poster_img"
        />
      <Name>{cast.name}</Name>
      <Character>{cast.character}</Character>
    </Card>
  );
};
