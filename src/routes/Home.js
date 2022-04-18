import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import Movie from "../components/Movie/Movie";
import { Container } from "../styles/styles";
import { BASE_URL, API_KEY } from "../utils/API";
import axios from "axios";

function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);
  
  const getMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`)
    setMovies(res.data.results);
  }
  
  useEffect(() => {
    getMovies();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movies.map((movie) => {
          let posterPath = "null"
          if (movie.poster_path) {
            posterPath = movie.poster_path
          }
          return (
            <Movie 
              key={movie.id}
              id={movie.id}
              posterPath={posterPath}
              title={movie.title}
              overview={movie.overview}
            />
          )})}
        </Container>
      )}
    </div>
  );
};

export default Home;
