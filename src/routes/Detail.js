
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { BASE_URL, API_KEY, IMG_URL } from "../utils/API";

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

  return (
    <div>
      { loading ? ( 
        <Loading />
      ) : (
        <div>
          <img src={IMG_URL + movie.backdrop_path} alt={movie.title}></img>
          <h1>{movie.title}</h1>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
          <img src={IMG_URL + movie.poster_path} alt={movie.title}></img>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  )
};

export default Detail;