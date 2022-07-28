import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../../utils/API";
import {
  Main,
  MainInfo,
  MovieBackdrop,
  MovieContainer,
  MovieContent,
  MovieImg,
  PrimeInfo,
  SideInfo,
  SubInfo,
  Tagline,
} from "./style";
import DefatulPoster from "../../assets/images/default_poster.jpg";
import DefatulBanner from "../../assets/images/default_banner.jpg";
import axios from "axios";
import DonutChart from "../../components/DonutChart";
import getMoney from "utils/getMoney";
import { 
  Cast,
  Crew,
  Movie,
  ProductionCountry,
} from "store/types/interfaces";
import Crews from "components/Crews";
import Casts from "components/Casts";
import BasicInfo from "components/BasicInfo";
import Homepages from "components/Homepages";
import Videos from "components/Videos";
import Images from "components/Images";
import Recommendations from "components/Recommendations";
import { Palette } from "color-thief-react";

function Detail() {
  const [ loading, setLoading ] = useState<boolean>(true);
  const { id } = useParams();
  const [ movie, setMovie ] = useState<Movie>({
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: null,
    id: 0,
    imdb_id: null,
    original_language: "",
    original_title: "",
    overview: null,
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: null,
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  });
  const [ productionCountry, setProductContry ] = useState<string>("");
  const [ casts, setCasts ] = useState<Cast[]>([]);
  const [ crews, setCrews ] = useState<Crew[]>([]);
  const [ POSTER_PATH, setPOSTER_PATH ] = useState<string>(DefatulPoster);
  const [ BACKDROP_PATH, setBACKDROP_PATH ] = useState<string>(DefatulBanner);
  
  useEffect(() => {
    async function getMovie() {
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`);
      setMovie(res.data);
    };    
    async function getCredits() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
      setCasts(res.data.cast.sort(function (a: Cast, b:Cast) { return a.order - b.order}).slice(0, 10));
      setCrews(res.data.crew);
    };
    getMovie();
    getCredits();
  }, [id]);

  useEffect(() => {
    if (movie.production_countries.length) {
      const res = movie.production_countries.filter((data: ProductionCountry) => data.iso_3166_1 !== "KR")[0];
      setProductContry(res.iso_3166_1);
    };
    if (movie.poster_path) {
      setPOSTER_PATH(IMG_URL + movie.poster_path);
    }
    if (movie.backdrop_path) {
      setBACKDROP_PATH(IMG_URL + movie.backdrop_path);
    }
  }, [movie]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return (
    <article>
      { !loading ? (
        <Main>
          <PrimeInfo color="black">
            <MovieBackdrop backdrop={BACKDROP_PATH}>
              <MovieContainer>
                <MovieImg src={POSTER_PATH} alt="poster_img"/>
                <MovieContent>
                  <h2>{movie.title}</h2>
                  <BasicInfo
                    id={movie.id}
                    genres={movie.genres} 
                    runtime={movie.runtime}
                    productionCountry={productionCountry}
                  />
                  <DonutChart
                    percentage={parseInt(String(movie.vote_average * 10))}
                    cnt={movie.vote_count}
                  />
                  <Tagline>{movie.tagline}</Tagline>
                  <h3>개요</h3>
                  <p>{movie.overview}</p>
                  <Crews crews={crews} />
                </MovieContent>
              </MovieContainer>
            </MovieBackdrop>
          </PrimeInfo>
          <SubInfo>
            <MainInfo>
              <Casts casts={casts} />
              <Videos id={movie.id} />
              <Images id={movie.id} lang={movie.original_language}/>
            </MainInfo>
            <SideInfo>
              <Homepages id={movie.id}/>
              <h3>원제</h3>
              <p>{movie.original_title}</p>
              <h3>상태</h3>
              <p>{movie.status}</p>
              <h3>원어</h3>
              <p>{movie.original_language}</p>
              <h3>제작비</h3>
              <p>{getMoney(movie.budget)}</p>
              <h3>수익</h3>
              <p>{getMoney(movie.revenue)}</p>
              <Recommendations id={movie.id}/>
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