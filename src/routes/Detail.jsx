import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../utils/API";
import { usePalette } from "react-palette";
import { MoiveInfo, MovieBackdrop, MovieContainer, MovieContent, MovieImg, MovieTitleContent } from "../styles/styles";
import DefatulPoster from "../assets/images/default_poster.jpg"
import DefatulBanner from "../assets/images/default_banner.jpg"
import axios from "axios";
import DonutChart from "../components/DonutChart/DonutChart";

function Detail() {
  const [ loading, setLoading ] = useState(true);
  const [ color, setColor ] = useState();
  const { id } = useParams();
  const [ movie, setMovie ] = useState();
  const [ releaseDates, setReleaseDates ] = useState();
  const [ releaseCountry, setReleaseCountry ] = useState("KR");
  const [ releaseDate, setReleaseDate ] = useState();
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


  // 국내 개봉 일자와 북미 개봉 일자 저장
  useEffect(() => {
    const getReleaseDates = async () => {
      const res = await axios.get(`${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`);
      setReleaseDates(res.data.results.filter(data => 
        data.iso_3166_1 === "KR" || data.iso_3166_1 === "US"
      ));
    }
    getReleaseDates();
  }, [id])


  // 국내 개봉 한 경우와 아닌경우 따로 저장
  useEffect(() => {
    if (releaseDates) {
      const releaseKR = releaseDates.filter(data => data.iso_3166_1 === "KR")[0]
      const releaseUS = releaseDates.filter(data => data.iso_3166_1 === "US")[0]
      if (releaseKR) {
        setReleaseDate(releaseKR.release_dates.filter(data => data.type === 3)[0])
      } else {
        setReleaseCountry("US")
        setReleaseDate(releaseUS.release_dates.filter(data => data.type === 3)[0])
      }
    }
  }, [releaseDates])


  // 커스텀 훅으로 만들어 보자
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
              <h1>{movie.title}</h1>
              <h2>{movie.original_title}</h2>
              <MovieTitleContent>
                <div style={{
                  border: "solid 1px white",
                  borderRadius: "2px",
                  padding: "3px"
                }}>
                  {releaseDate.certification}
                </div>
                <div>
                  {releaseDate.release_date.slice(0, 10)}({releaseCountry})
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
                <DonutChart percentage={movie.vote_average * 10}/>
              </MoiveInfo>
              <h3>{movie.tagline}</h3>
              <h2>개요</h2>
              <p>{movie.overview}</p>
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