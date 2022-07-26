import React from 'react';
import { Cast } from 'store/types/interfaces';
import { IMG_URL } from 'utils/API';
import { Card, Character, Name, Poster } from './style';

export default function index({ cast }: { cast: Cast }) {
  return (
    <Card>
      <Poster src={IMG_URL + cast.profile_path} />
      <Name>{cast.name}</Name>
      <Character>{cast.character}</Character>
    </Card>
  );
};
