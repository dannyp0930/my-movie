import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movie } from "store/types/interfaces";
import { API_KEY, BASE_URL, IMG_URL } from "utils/API";
import { MovieContainer, MovieImg, MovieList } from "./style";
import DefatulBanner from "../../assets/images/default_banner.jpg";

export default function Recommendations({ id }: { id: number }) {
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  useEffect(() => {
    async function getRecommendations() {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR`
      );
      setRecommendations(res.data.results.slice(0, 8));
    }
    getRecommendations();
  }, [id]);

  return (
    <div>
      <h2>추천 영화</h2>
      <MovieList>
        {recommendations.map((movie) => {
          return (
            <MovieContainer to={`/movie/${movie.id}`} key={movie.id}>
              <MovieImg
                src={
                  movie.backdrop_path
                    ? IMG_URL + movie.backdrop_path
                    : DefatulBanner
                }
                alt=""
              />
              <p>{movie.title}</p>
            </MovieContainer>
          );
        })}
      </MovieList>
    </div>
  );
}
