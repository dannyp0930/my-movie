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
} from "./style"
import { H1, H2, H3,} from "../../styles/Hgroup";
import DefatulPoster from "../../assets/images/default_poster.jpg"
import DefatulBanner from "../../assets/images/default_banner.jpg"
import axios from "axios";
import DonutChart from "../../components/DonutChart";

function Detail() {
  const [ loading, setLoading ] = useState(true);
  const [ color, setColor ] = useState();
  const { id } = useParams();
  const [ movie, setMovie ] = useState();
  const [ POSTER_PATH, setPOSTER_PATH ] = useState();
  const [ BACKDROP_PATH, setBACKDROP_PATH ] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`);
      setMovie(res.data);
    };    
    getMovie();
  }, [id])

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

  const { data } = usePalette(POSTER_PATH);

  useEffect(() => {
    setColor(data.darkVibrant);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [data])

  // data = {
  //   darkMuted: "#2a324b"
  //   darkVibrant: "#0e7a4b"
  //   lightMuted: "#9cceb7"
  //   lightVibrant: "#a4d4bc"
  //   muted: "#64aa8a"
  //   vibrant: "#b4d43c"
  // }

  return (
    <div>
      { !loading && movie && color && BACKDROP_PATH && POSTER_PATH ? ( 
        <MovieBackdrop
          color={color}
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
                  {parseInt(movie.runtime / 60)}h {movie.runtime % 60}m
                </div>
              </MovieTitleContent>
              <MoiveInfo>
                <DonutChart percentage={parseInt(movie.vote_average * 10)}/>
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
    </div>
  );
};

export default Detail;