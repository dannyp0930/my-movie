import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from 'utils/API';
import { Card, CardImage, CardItem, CardTitle } from './style';
import DefatulBanner from "../../assets/images/default_banner.jpg";
import { Movie } from 'store/types/interfaces';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card
      key={movie.id}
    >
      <Link to={`/movie/${movie.id}`}>
        <CardItem>
          <CardTitle>{movie.title}</CardTitle>
          <CardImage src={movie.poster_path ? IMG_URL + movie.poster_path : DefatulBanner} alt="poster_img"/>
        </CardItem>
      </Link>
    </Card>
  );
};
