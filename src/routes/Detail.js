import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../utils/API";
import { usePalette } from "react-palette";
import { BackDropImg } from "../styles/styles";

function Detail() {
  const [ loading, setLoading ] = useState(true);
  const { id }= useParams();
  const [ movie, setMovie ] = useState({});
  const getMovie = async() => {
    const json = await (
      await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
    ).json();
    setMovie(json)
    setLoading(false)
  }
  useEffect(() => {
    getMovie();
  }, []);

  const BACKDROP_PATH = IMG_URL + movie.backdrop_path
  const POSTER_PATH = IMG_URL + movie.poster_path
  const { data } = usePalette(IMG_URL + movie.poster_path)
  const dominant = data.darkVibrant
  
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
        <div>
          <BackDropImg src={BACKDROP_PATH} layer={dominant}/>
          <h1>{movie.title}</h1>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
          <img src={POSTER_PATH} alt="../images/default_poster.jpg"/>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  )
};

export default Detail;