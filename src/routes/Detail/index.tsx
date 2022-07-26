import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../../utils/API";
import { usePalette } from "react-palette";
import {
  H2,
  H3,
  Main,
  MovieBackdrop,
  MovieContainer,
  MovieContent,
  MovieImg,
  P,
  PrimeInfo,
  SideInfo,
  SubInfo,
  Tagline
} from "./style";
import DefatulPoster from "../../assets/images/default_poster.jpg";
import DefatulBanner from "../../assets/images/default_banner.jpg";
import axios from "axios";
import DonutChart from "../../components/DonutChart";
import getMoney from "utils/getMoney";
import { Movie } from "store/types/interfaces";

function Detail() {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ color, setColor ] = useState<string>();
  const { id } = useParams();
  const [ movie, setMovie ] = useState<Movie>({
    id: 0,
    backdrop_path: '',
    budget: 0,
    genres: [],
    title: '',
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: 0,
    tagline: '',
    vote_average: 0,
  });
  const [ POSTER_PATH, setPOSTER_PATH ] = useState<string>("");
  const [ BACKDROP_PATH, setBACKDROP_PATH ] = useState<string>("");
  const { data } = usePalette(POSTER_PATH);

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`);
      setMovie(res.data);
    };    
    getMovie();
  }, [id]);


  useEffect(() => {
    if (movie) {
      console.log(movie)
      if (movie.poster_path) {
        setPOSTER_PATH(IMG_URL + movie.poster_path);
      } else {
        setPOSTER_PATH(DefatulPoster);
      }
      if (movie.backdrop_path) {
        setBACKDROP_PATH(IMG_URL + movie.backdrop_path);
      } else {
        setBACKDROP_PATH(DefatulBanner);
      }
    }
  }, [movie]);

  useEffect(() => {
    setColor(data.muted);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data])

  return (
    <article>
      { !loading ? (
        <Main>
          <PrimeInfo color={color as string}>
            <MovieBackdrop backdrop={BACKDROP_PATH}>
              <MovieContainer>
                <MovieImg src={POSTER_PATH} alt="poster_img"/>
                <MovieContent>
                  <H2>{movie.title}</H2>
                  <P>
                    {movie.release_date}
                    &nbsp;·&nbsp;
                    {movie.genres.map(genre => genre.name).join(', ')}
                    &nbsp;·&nbsp;
                    {parseInt(String(movie.runtime / 60))}h {movie.runtime % 60}m
                  </P>
                  <DonutChart percentage={parseInt(String(movie.vote_average * 10))}/>
                  <Tagline>{movie.tagline}</Tagline>
                  <H3>개요</H3>
                  <P>{movie.overview}</P>
                </MovieContent>
              </MovieContainer>
            </MovieBackdrop>
          </PrimeInfo>
          <SubInfo>
            <div>
              <H2>주요 출연진</H2>
            </div>
            <SideInfo>
              <H3>원제</H3>
              <P>{movie.original_title}</P>
              <H3>제작비</H3>
              <P>{getMoney(movie.budget)}</P>
              <H3>수익</H3>
              <P>{getMoney(movie.revenue)}</P>
            </SideInfo>
          </SubInfo>
        </Main>
      ) : (
        <Loading />
      )}
    </article>
  );
};

export default Detail;