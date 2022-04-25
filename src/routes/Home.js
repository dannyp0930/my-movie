import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
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
              <Title>
                My Movie
              </Title>
          </Header>
          <Carousel
            movies={popularMovies}
            title="현재 인기 영화"
          />
          <Carousel
            movies={topMovies}
            title="최고 평점 영화"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
