import React, { useEffect, useState } from "react";
import Loading from "../../components/common/Loading";
import { Article, Content, Header, Title } from "./style";
import { BASE_URL, API_KEY } from "../../utils/API";
import axios from "axios";
import Carousel from "../../components/Carousel";

function Home() {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);
  const [ upcommingMovies, setUpcomingMovies ] = useState([]);

  async function getPopularMovies() {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR`);
    setPopularMovies(res.data.results);
  };

  async function getTopMovies() {
    const res = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR`);
    setTopMovies(res.data.results);
  };

  async function getUpcommingMovies() {
    const res = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR`);
    setUpcomingMovies(res.data.results);
  };

  useEffect(() => {
    getPopularMovies();
    getTopMovies();
    getUpcommingMovies();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
            <Carousel
              movies={popularMovies}
              title="현재 인기 영화"
            />
            <Carousel
              movies={topMovies}
              title="최고 평점 영화"
            />
            <Carousel
              movies={upcommingMovies}
              title="개봉 예정 영화"
            />
          </Content>
        </Article>
      )}
    </>
  );
};

export default Home;
