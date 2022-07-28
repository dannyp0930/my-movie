import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Movie } from 'store/types/interfaces';
import { API_KEY, BASE_URL } from 'utils/API';

export default function Recommendations({ id }: { id: number }) {
  const [ recommendations, setRecommendations ] = useState<Movie[]>([]);
  useEffect(() => {
    async function getRecommendations() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR`);
      setRecommendations(res.data.results.slice(0, 10))
    };
    getRecommendations();
  }, [id]);

  return (
    <div>
      <h2>추천 영화</h2>
      {recommendations.map(movie => {
        return (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </div>
        )
      })}
    </div>
  );
};
