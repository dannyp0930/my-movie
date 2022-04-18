import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../utils/API";
import { usePalette } from "react-palette";
import { MovieContainer, MovieContent, MovieImg } from "../styles/styles";

function Detail() {
  const [ loading, setLoading ] = useState(true);
  const { id }= useParams();
  const [ movie, setMovie ] = useState({});
  const getMovie = async() => {
    const json = await (
      await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
    ).json();
    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  const [ POSTER_PATH, setPOSTER_PATH ] = useState(
    `${process.env.PUBLIC_URL}/images/default_poster.jpg`
  );

  useEffect(() => {
    if (movie.poster_path) {
      setPOSTER_PATH(IMG_URL + movie.poster_path)
    }
  }, [movie]);

  const { data } = usePalette(POSTER_PATH);
  const color = data.darkVibrant;
  
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
        <MovieContainer color={color}>
          <MovieImg src={POSTER_PATH} alt="poster_img"/>
          <MovieContent>
            <h1>{movie.title}</h1>
            <h2>{movie.original_title}</h2>
            <p>{movie.release_date}({movie.original_language.toUpperCase()}) · {parseInt(movie.runtime / 60)}h {movie.runtime % 60}m</p>
            <p>회원점수: {movie.vote_average}</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p>{movie.overview}</p>
          </MovieContent>
        </MovieContainer>
      )}
    </div>
  );
};

export default Detail;