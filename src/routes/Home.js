import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import Movie from "../components/Movie/Movie";
import { Header, Title } from "../styles/styles";
import { BASE_URL, API_KEY, IMG_URL } from "../utils/API";
import axios from "axios";
import Carousel from "../components/Carousel/Carousel";

function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);
  const [ backdropURL, setBackdropURL ] = useState('');
  
  const getPopularMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    setPopularMovies(res.data.results);
  };
  
  const getNowPlayingMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`);
    setTopMovies(res.data.results);
  };
  
  useEffect(() => {
    getPopularMovies();
    getNowPlayingMovies();
  }, []);

  useEffect(() => {
    if (popularMovies.length) {
      const backdropPath = popularMovies[Math.floor(Math.random()*popularMovies.length)].backdrop_path
      setBackdropURL(IMG_URL + backdropPath)
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [popularMovies])

  return (
    <div>
      {loading ? (
        <Loading />
        ) : (
        <div>
          <Header
            backdrop={backdropURL}
            >
            My Movie
          </Header>
          <Title>
            현재 인기 영화
          </Title>
          <Carousel movies={popularMovies}></Carousel>
          <Title>
            최고 평점 영화
          </Title>
          <Carousel movies={topMovies}></Carousel>
        </div>
      )}
    </div>
  );
};

export default Home;
