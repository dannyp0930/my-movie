import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../../utils/API";
import { usePalette } from "react-palette";
import {
  MoiveInfo,
  MovieBackdrop,
  MovieContainer,
  MovieContent,
  MovieImg,
  MovieTitleContent 
} from "./style";
import { H1, H2, H3,} from "../../styles/Hgroup";
import DefatulPoster from "../../assets/images/default_poster.jpg";
import DefatulBanner from "../../assets/images/default_banner.jpg";
import axios from "axios";
import DonutChart from "../../components/DonutChart";

interface Genre {
  id: number;
  name: string;
};

interface Movie {
  backdrop_path: string;
  genres: Genre[];
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  vote_average: number;
};

function Detail() {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ color, setColor ] = useState<string>();
  const { id } = useParams();
  const [ movie, setMovie ] = useState<Movie>({
    backdrop_path: '',
    genres: [],
    title: '',
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: '',
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
        <MovieBackdrop
          color={color as string}
          backdrop={BACKDROP_PATH}
        >
          <MovieContainer>
            <MovieImg src={POSTER_PATH} alt="poster_img"/>
            <MovieContent>
              <H1>{movie.title}</H1>
              <H2>{movie.original_title}</H2>
              <MovieTitleContent>
                <div>
                  {movie.release_date}
                </div>
                <div style={{fontSize: "1.5rem"}}>·</div>
                <div>
                  {movie.genres.map(genre => genre.name).join(', ')}
                </div>
                <div style={{fontSize: "1.5rem"}}>·</div>
                <div>
                  {parseInt(String(movie.runtime / 60))}h {movie.runtime % 60}m
                </div>
              </MovieTitleContent>
              <MoiveInfo>
                <DonutChart percentage={parseInt(String(movie.vote_average * 10))}/>
                <H3>{movie.tagline}</H3>
                <H2>개요</H2>
                <p>{movie.overview}</p>
              </MoiveInfo>
            </MovieContent>
          </MovieContainer>
        </MovieBackdrop>
      ) : (
        <Loading />
      )}
    </article>
  );
};

export default Detail;