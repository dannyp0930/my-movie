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
  const [ comeMovies, setComeMovies ] = useState([]);

  async function getMovies() {
    const res1 = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    setPopularMovies(res1.data.results);
    const res2 = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`);
    setTopMovies(res2.data.results);
    const res3 = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR`);
    setComeMovies(res3.data.results);
  };
  
  useEffect(() => {
    getMovies();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
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
          <Carousel
            movies={comeMovies}
            title="개봉 예정 영화"
          />
        </>
      )}
    </>
  );
};

export default Home;
