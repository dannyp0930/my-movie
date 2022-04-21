import axios from "axios";
import { useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "../styles/styles";
import { API_KEY, BASE_URL } from "../utils/API";

export function Search() {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  function handleChange (e) {
    setQuery(e.target.value)
  };

  function handleClick() {
    if (query) {
      axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`)
      .then(res => {
        setSearchMovies(res.data.results)
      })
    } else {
      alert("검색어를 입력하세요.")
    }
  };

  return (
    <SearchContainer>
      <div>
        <SearchInput onChange={handleChange}/>
        <SearchButton onClick={handleClick}>검색</SearchButton>
      </div>
      <div>
        {!searchMovies && <>검색결과 없음</>}
        {searchMovies.map(movie => {
          return (
            <div>
              {movie.title}
            </div>
          )
        })}
      </div>
    </SearchContainer>
  )
}
