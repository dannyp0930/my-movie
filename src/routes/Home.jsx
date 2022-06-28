import React, { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import { Header, Title } from "../styles/styles";
import { BASE_URL, API_KEY } from "../utils/API";
import axios from "axios";
import Carousel from "../components/Carousel";

function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);

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
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
        ) : (
        <>
          <Header>
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
        </>
      )}
    </div>
  );
};

export default Home;
