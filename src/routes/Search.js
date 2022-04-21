import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loading/Loading";
import Movie from "../components/Movie/Movie";
import {
  Container,
  NoSearchMovies,
  SearchButton,
  SearchContainer,
  SearchInput
} from "../styles/styles";
import { API_KEY, BASE_URL } from "../utils/API";

export function Search() {
  const [ query, setQuery ] = useState('');
  const [ searchMovies, setSearchMovies ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  function handleChange(e) {
    setQuery(e.target.value)
  };

  const handleClick = async () => {
    if (query) {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`)
      setSearchMovies(res.data.results.map(movie => {
        let posterPath = "null"
        if (movie.poster_path) {
          posterPath = movie.poster_path
        }
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            posterPath={posterPath}
            title={movie.title}
            overview={movie.overview}
          />
        )
      }))
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      alert("검색어를 입력하세요.")
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          onChange={handleChange}
          placeholder="검색어를 입력하세요."
        />
        <SearchButton onClick={handleClick}>검색</SearchButton>
      </SearchContainer>
      { loading ? (
        <Loading />
      ) : (
      <div>
        {searchMovies.length ? (
          <Container>
            {searchMovies}
          </Container>
        ) : (
          <NoSearchMovies>검색 결과가 없습니다.</NoSearchMovies>
        )}
      </div>
      )}
    </div>
  )
}
