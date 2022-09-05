import React, { useEffect, useState } from "react";
import Loading from "../../components/common/Loading";
import { Article, Content, Header, Title } from "./style";
import { BASE_URL, API_KEY } from "../../utils/API";
import axios from "axios";
import Carousel from "../../components/Carousel";
import { Movie } from "store/types/interfaces";

function Home() {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);
  const [ upcommingMovies, setUpcomingMovies ] = useState([]);

  async function getPopularMovies() {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    setPopularMovies(res.data.results.slice(0, 12));
  };

  async function getTopMovies() {
    const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`);
    setTopMovies(res.data.results.slice(0, 12));
  };

  async function getUpcommingMovies() {
    const res = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR`);
    setUpcomingMovies(res.data.results.slice(0, 12));
  };

  useEffect(() => {
    getPopularMovies();
    getTopMovies();
    getUpcommingMovies();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  function renderMovies(movies: Movie[], string: string) {
    return (
      <Carousel
        movies={movies}
        title={string}
      />
    )
  };

  return (
    <>
      {loading ? (
          <Loading />
        ) : (
        <Article>
          <Header>
            <Title>
              My Movie
            </Title>
          </Header>
          <Content>
            {renderMovies(popularMovies, "현재 인기 영화")}
            {renderMovies(topMovies, "최고 평점 영화")}
            {renderMovies(upcommingMovies, "개봉 예정 영화")}
          </Content>
        </Article>
      )}
    </>
  );
};

export default Home;
