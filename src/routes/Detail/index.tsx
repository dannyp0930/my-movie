import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../../utils/API";
import { usePalette } from "react-palette";
import {
  A,
  BasicInfo,
  CastContainer,
  Certification,
  Dot,
  H2,
  H3,
  Hompage,
  Hompages,
  Main,
  MainInfo,
  MovieBackdrop,
  MovieContainer,
  MovieContent,
  MovieImg,
  P,
  PrimeInfo,
  SideInfo,
  SubInfo,
  Tagline,
  Text
} from "./style";
import DefatulPoster from "../../assets/images/default_poster.jpg";
import DefatulBanner from "../../assets/images/default_banner.jpg";
import axios from "axios";
import DonutChart from "../../components/DonutChart";
import getMoney from "utils/getMoney";
import { 
  Cast,
  Crew,
  ExternalIds,
  Movie,
  ProductionCountry,
  ReleaseDate,
  ReleaseDates
} from "store/types/interfaces";
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Videos from "components/Videos";
import Crews from "components/Crews";
import Casts from "components/Casts";

function Detail() {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ color, setColor ] = useState<string>();
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
  const [ releaseDatesList, setReleaseDatesList ] = useState<ReleaseDates[]>([]);
  const [ KRreleaseDate, setKRReleaseDate ] = useState<ReleaseDate>({
    certification: "",
    iso_639_1: "",
    release_date: "",
    type: 0,
    note: "",
  });
  const [ productionCountry, setProductContry ] = useState<string>();
  const [ ORreleaseDate, setORReleaseDate ] = useState<ReleaseDate>({
    certification: "",
    iso_639_1: "",
    release_date: "",
    type: 0,
    note: "",
  });
  const [ certification, setCertification ] = useState<string>("");
  const [ casts, setCasts ] = useState<Cast[]>([]);
  const [ crews, setCrews ] = useState<Crew[]>([]);
  const [ externalIds, setExternalIds] = useState<ExternalIds>({
    imdb_id: "",
    facebook_id: "",
    instagram_id: "",
    twitter_id: "",
    id: 0,
  });
  const [ POSTER_PATH, setPOSTER_PATH ] = useState<string>("");
  const [ BACKDROP_PATH, setBACKDROP_PATH ] = useState<string>("");
  const { data } = usePalette(POSTER_PATH);

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
    async function getReleaseDates() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`);
      setReleaseDatesList(res.data.results);
    };
    getMovie();
    getCredits();
    getReleaseDates();
  }, [id]);

  useEffect(() => {
    async function getExternalIds() {
      const res = await axios.get(`${BASE_URL}/movie/${id}/external_ids?api_key=${API_KEY}&`);
      setExternalIds(res.data)
    };
    getExternalIds();
  }, [id]);

  useEffect(() => {
    if (movie.production_countries.length) {
      const res = movie.production_countries.filter((data: ProductionCountry) => data.iso_3166_1 !== "KR")[0];
      setProductContry(res.iso_3166_1);
    };
    if (movie.poster_path) {
      setPOSTER_PATH(IMG_URL + movie.poster_path);
    } else {
      setPOSTER_PATH(DefatulPoster);
    };
    if (movie.backdrop_path) {
      setBACKDROP_PATH(IMG_URL + movie.backdrop_path);
    } else {
      setBACKDROP_PATH(DefatulBanner);
    };
  }, [movie]);

  useEffect(() => {
    if (releaseDatesList.length) {
      const res = releaseDatesList.filter((data: ReleaseDates) => data.iso_3166_1 === "KR")[0];
      if (res) {
        setKRReleaseDate(res.release_dates.filter((data: ReleaseDate) => data.type !== 1 && data.type !== 2)[0]);
      };
    };
  }, [releaseDatesList]);

  useEffect(() => {
    if (releaseDatesList.length) {
      const res = releaseDatesList.filter((data: ReleaseDates) => data.iso_3166_1 === productionCountry)[0];
      if (res) {
        setORReleaseDate(res.release_dates.filter((data: ReleaseDate) => data.type !== 1 && data.type !== 2)[0]);
      };
    };
  }, [releaseDatesList, productionCountry]);

  useEffect(() => {
    if (KRreleaseDate.certification) {
      setCertification(KRreleaseDate.certification)
    } else if (ORreleaseDate.certification) {
      setCertification(ORreleaseDate.certification)
    };
  }, [KRreleaseDate, ORreleaseDate]);

  useEffect(() => {
    setColor(data.muted);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data]);

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
                  <BasicInfo>
                    {certification && <Certification>{certification}</Certification>}
                    <Text>
                      {KRreleaseDate.release_date ? `${KRreleaseDate.release_date.slice(0, 10)}(KR)` : `${ORreleaseDate.release_date.slice(0, 10)}(${productionCountry})`}
                    </Text>
                    <Dot>·</Dot>
                    <Text>
                      {movie.genres.map(genre => genre.name).join(', ')}
                    </Text>
                    <Dot>·</Dot>
                    <Text>
                      {parseInt(String(movie.runtime / 60))}h {movie.runtime % 60}m
                    </Text>
                  </BasicInfo>
                  <DonutChart percentage={parseInt(String(movie.vote_average * 10))}/>
                  <Tagline>{movie.tagline}</Tagline>
                  <H3>개요</H3>
                  <P>{movie.overview}</P>
                  <Crews crews={crews}/>
                </MovieContent>
              </MovieContainer>
            </MovieBackdrop>
          </PrimeInfo>
          <SubInfo>
            <MainInfo>
              <H2>주요 출연진</H2>
              <CastContainer>
                <Casts casts={casts}/>
              </CastContainer>
            </MainInfo>
            <SideInfo>
              <Hompages>
                <Hompage>
                  <A href={`https://www.facebook.com/${externalIds.instagram_id}`} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faSquareFacebook} size="3x"/>
                  </A>
                </Hompage>
                <Hompage>
                  <A href={`https://twitter.com/${externalIds.instagram_id}`} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faSquareTwitter} size="3x"/>
                  </A>
                </Hompage>
                <Hompage>
                  <A href={`https://www.instagram.com/${externalIds.instagram_id}`} rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faSquareInstagram} size="3x"/>
                  </A>
                </Hompage>
              </Hompages>
              <H3>원제</H3>
              <P>{movie.original_title}</P>
              <H3>상태</H3>
              <P>{movie.status}</P>
              <H3>원어</H3>
              <P>{movie.original_language}</P>
              <H3>제작비</H3>
              <P>{getMoney(movie.budget)}</P>
              <H3>수익</H3>
              <P>{getMoney(movie.revenue)}</P>
            </SideInfo>
            <MainInfo>
              <Videos id={movie.id}/>
            </MainInfo>
          </SubInfo>
        </Main>
      ) : (
        <Loading />
      )}
    </article>
  );
};

export default Detail;