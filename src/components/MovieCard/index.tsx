import { Movie } from 'components/Carousel';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from 'utils/API';
import { Card, CardImage, CardItem, CardTitle } from './style';
import DefatulBanner from "../../assets/images/default_banner.jpg";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card
      key={movie.id}
    >
      <Link to={`/movie/${movie.id}`}>
        <CardItem>
          <CardTitle>{movie.title}</CardTitle>
          <CardImage src={movie.backdrop_path ? IMG_URL + movie.backdrop_path : DefatulBanner} alt="poster_img"/>
        </CardItem>
      </Link>
    </Card>
  )
};
