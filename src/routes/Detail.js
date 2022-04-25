import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../utils/API";
import { usePalette } from "react-palette";
import { MoiveInfo, MovieBackdrop, MovieContainer, MovieContent, MovieImg } from "../styles/styles";
import DefatulPoster from "../assets/images/default_poster.jpg"
import DefatulBanner from "../assets/images/default_banner.jpg"
import axios from "axios";
import DonutChart from "../components/DonutChart/DonutChart";

function Detail() {
  const [ loading, setLoading ] = useState(true);
  const [ color, setColor ] = useState("black");
  const { id } = useParams();
  const [ movie, setMovie ] = useState();
  const [ POSTER_PATH, setPOSTER_PATH ] = useState("");
  const [ BACKDROP_PATH, setBACKDROP_PATH ] = useState("");

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
        setPOSTER_PATH(DefatulPoster)
      }
      if (movie.backdrop_path) {
        setBACKDROP_PATH(IMG_URL + movie.backdrop_path);
      } else {
        setPOSTER_PATH(DefatulBanner)
      }
    }
  }, [movie]);
  
  const { data } = usePalette(POSTER_PATH);

  useEffect(() => {
    if (data) {
      setColor(data.darkVibrant);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
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
      { loading ? ( 
        <Loading />
      ) : (
        <MovieBackdrop
          color={color}
          backdrop={BACKDROP_PATH}
        >
          <MovieContainer>
            <MovieImg src={POSTER_PATH} alt="poster_img"/>
            <MovieContent>
              <h1>{movie.title}</h1>
              <h2>{movie.original_title}</h2>
              <h3>{movie.tagline}</h3>
              <MoiveInfo>
                <DonutChart percentage={movie.vote_average * 10}/>
                <p>{movie.release_date}({movie.original_language.toUpperCase()}) · {movie.genres.map(genre => genre.name).join(', ')} · {parseInt(movie.runtime / 60)}h {movie.runtime % 60}m</p>
              </MoiveInfo>
              <h2>개요</h2>
              <p>{movie.overview}</p>
            </MovieContent>
          </MovieContainer>
        </MovieBackdrop>
      )}
    </div>
  );
};

export default Detail;