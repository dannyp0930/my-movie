import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import Movie from "../components/Movie/Movie";
import { Container } from "../styles/styles";
import { BASE_URL, API_KEY } from "../utils/API"

function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`)
    ).json();
    setMovies(json.results);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genreIds={movie.genre_ids}
            />
          ))}
        </Container>
      )}
    </div>
  );
};

export default Home;
