import axios from "axios";
import { useState } from "react";
import Movie from "../components/Movie/Movie";
import { Container, SearchButton, SearchContainer, SearchInput } from "../styles/styles";
import { API_KEY, BASE_URL } from "../utils/API";

export function Search() {
  const [ query, setQuery ] = useState('');
  const [ searchMovies, setSearchMovies ] = useState(null);

  function handleChange(e) {
    setQuery(e.target.value)
  };

  function handleClick() {
    if (query) {
      axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`)
      .then(res => {
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
      })
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
      <Container>
        {searchMovies}
      </Container>
    </div>
  )
}
