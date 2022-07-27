import React from 'react';
import { Cast } from 'store/types/interfaces';
import { IMG_URL } from 'utils/API';
import { Card, Character, Name, Poster } from './style';
import DefaultNone from "../../assets/images/default_none.png"
import DefaultMan from "../../assets/images/default_man.png"
import DefaultWoman from "../../assets/images/default_woman.png"

export default function index({ cast }: { cast: Cast }) {
  function getDefaultPoster(): string {
    if (cast.gender === 1) {
      return DefaultWoman
    } else if (cast.gender === 2) {
      return DefaultMan
    } else {
      return DefaultNone
    };
  };

  return (
    <Card>
      <Poster
        src={
          cast.profile_path ?
          IMG_URL + cast.profile_path :
          getDefaultPoster()
        }
        alt="poster_img"
        />
      <Name>{cast.name}</Name>
      <Character>{cast.character}</Character>
    </Card>
  );
};
