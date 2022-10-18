import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "utils/API";
import { Card, CardImage, CardItem, CardTitle } from "./style";
import DefaultBanner from "../../assets/images/default_banner.jpg";
import { Movie } from "store/types/interfaces";

export default function MovieCard({ movie }: { movie: Movie }) {
  const [movieBackdrop, setMovieBackdrop] = useState<string>(DefaultBanner);
  useEffect(() => {
    if (movie.backdrop_path) {
      setMovieBackdrop(IMG_URL + movie.backdrop_path);
    }
  }, [movie]);

  return (
    <Card key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <CardItem>
          <CardTitle>{movie.title}</CardTitle>
          <CardImage src={movieBackdrop} alt="poster_img" />
        </CardItem>
      </Link>
    </Card>
  );
}
