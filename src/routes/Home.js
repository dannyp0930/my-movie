import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import Movie from "../components/Movie/Movie";
import { Container, Header, Title } from "../styles/styles";
import { BASE_URL, API_KEY, IMG_URL } from "../utils/API";
import axios from "axios";

function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ nowPlayingMovies, setNowPlayingMovies ] = useState([]);
  const [ backdropURL, setBackdropURL ] = useState('');
  
  const getPopularMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    setPopularMovies(res.data.results);
  };
  
  const getNowPlayingMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`);
    setNowPlayingMovies(res.data.results);
  };
  
  useEffect(() => {
    getPopularMovies();
    getNowPlayingMovies();
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (popularMovies.length) {
      const backdropPath = popularMovies[Math.floor(Math.random()*popularMovies.length)].backdrop_path
      setBackdropURL(IMG_URL + backdropPath)
    }
  }, [popularMovies])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header
            style={{
              backgroundImage: `url(${backdropURL})`
            }}
          >
            My Movie
          </Header>
          <Title>
            현재 인기 영화
          </Title>
          <Container>
            {popularMovies.map((movie) => {
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
          <Title>
            최고 평점 영화
          </Title>
          <Container>
            {nowPlayingMovies.map((movie) => {
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
        </div>
      )}
    </div>
  );
};

export default Home;
